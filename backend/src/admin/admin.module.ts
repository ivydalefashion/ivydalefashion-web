import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma.service';

@Module({})
export class AdminModule {
  static async forRoot(): Promise<DynamicModule> {
    try {
      // Dynamic imports with explicit paths
      const adminjs = await import('adminjs');
      const nestjsAdmin = await import('@adminjs/nestjs');
      const prismaAdapter = await import('@adminjs/prisma');

      const AdminJS = adminjs.default;
      const { AdminModule: NestJSAdminModule } = nestjsAdmin;
      const { Database, Resource, getModelByName } = prismaAdapter;

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
              
              // Get all model names from Prisma
              const modelNames = Object.keys(prismaService).filter(
                key => !key.startsWith('_') && !key.startsWith('$') && typeof prismaService[key] === 'object'
              );

              // Create resources
              const resources = modelNames.map(modelName => ({
                resource: {
                  model: getModelByName(modelName),
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