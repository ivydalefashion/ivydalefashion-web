import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

const nativeImport = new Function(
  'modulePath',
  'return import(modulePath)',
) as (modulePath: string) => Promise<any>;

@Module({})
export class AdminModule {
  static async forRoot(): Promise<DynamicModule> {
    try {
      // Keep ESM imports native to support AdminJS packages in CommonJS output.
      const adminjs = await nativeImport('adminjs');
      const nestjsAdmin = await nativeImport('@adminjs/nestjs');
      const prismaAdapter = await nativeImport('@adminjs/prisma');

      const AdminJS = adminjs.default;
      const { AdminModule: NestJSAdminModule } = nestjsAdmin;
      const ExpressLoader = nestjsAdmin.ExpressLoader as {
        prototype?: { reorderRoutes?: (app: any) => void };
      };
      const { Database, Resource, getModelByName } = prismaAdapter;

      if (ExpressLoader?.prototype?.reorderRoutes) {
        ExpressLoader.prototype.reorderRoutes = function reorderRoutes(app: any) {
          const routerStack = app?._router?.stack;
          if (!routerStack) return;

          let jsonParser: any[] = [];
          let urlencodedParser: any[] = [];
          let admin: any[] = [];

          const jsonParserIndex = routerStack.findIndex(
            (layer: any) => layer.name === 'jsonParser',
          );
          if (jsonParserIndex >= 0) {
            jsonParser = routerStack.splice(jsonParserIndex, 1);
          }

          const urlencodedParserIndex = routerStack.findIndex(
            (layer: any) => layer.name === 'urlencodedParser',
          );
          if (urlencodedParserIndex >= 0) {
            urlencodedParser = routerStack.splice(urlencodedParserIndex, 1);
          }

          const adminIndex = routerStack.findIndex(
            (layer: any) => layer.name === 'admin',
          );
          if (adminIndex >= 0) {
            admin = routerStack.splice(adminIndex, 1);
          }

          const corsIndex = routerStack.findIndex(
            (layer: any) => layer.name === 'corsMiddleware',
          );
          const expressInitIndex = routerStack.findIndex(
            (layer: any) => layer.name === 'expressInit',
          );
          const initIndex = (corsIndex >= 0 ? corsIndex : expressInitIndex) + 1;
          routerStack.splice(
            initIndex,
            0,
            ...admin,
            ...jsonParser,
            ...urlencodedParser,
          );
        };
      }

      // Register Prisma adapter
      AdminJS.registerAdapter({ Database, Resource });

      return {
        module: AdminModule,
        imports: [
          NestJSAdminModule.createAdminAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => {
              // Create resources function
              const prismaService = new PrismaService();
              
              const delegateKeys = new Set(
                Object.keys(prismaService).filter(
                  key =>
                    !key.startsWith('_') &&
                    !key.startsWith('$') &&
                    typeof prismaService[key] === 'object',
                ),
              );

              // AdminJS Prisma adapter expects model names from Prisma schema (e.g. "User").
              const resources = Prisma.dmmf.datamodel.models
                .filter(model => {
                  const delegateKey =
                    model.name.charAt(0).toLowerCase() + model.name.slice(1);
                  return delegateKeys.has(delegateKey);
                })
                .map(model => ({
                resource: {
                  model: getModelByName(model.name),
                  client: prismaService,
                },
                options: {
                  properties: {
                    password: { isVisible: false },
                    createdAt: { isVisible: { list: true, filter: true, show: true, edit: false } },
                    updatedAt: { isVisible: { list: true, filter: true, show: true, edit: false } },
                  },
                },
              }));

              return {
                adminJsOptions: {
                  rootPath: '/admin',
                  resources,
                  branding: {
                    companyName: 'Ivydale Fashion',
                  },
                },
                auth: {
                  authenticate: async (email, password) => {
                    if (
                      email === configService.get('ADMIN_EMAIL') &&
                      password === configService.get('ADMIN_PASSWORD')
                    ) {
                      return { email };
                    }
                    return null;
                  },
                  cookiePassword: configService.get('COOKIE_SECRET') || 'secret',
                  cookieName: 'ivydale-admin',
                },
                sessionOptions: {
                  secret: configService.get('COOKIE_SECRET') || 'secret',
                  resave: true,
                  saveUninitialized: true,
                },
              };
            },
          }),
        ],
      };
    } catch (error) {
      console.error('AdminJS initialization failed:', error.message);
      return {
        module: AdminModule,
        imports: [],
      };
    }
  }
}