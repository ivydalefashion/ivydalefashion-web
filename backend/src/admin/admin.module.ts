import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma.service';  // Add this import
import { createAdminResources } from './admin.resources';  // Add this import

@Module({})
export class AdminModule {
  static async forRoot(): Promise<DynamicModule> {
    try {
      // Dynamic imports for AdminJS packages
      const [{ default: AdminJS }, { AdminModule: NestJSAdminModule }, { Database, Resource }] = await Promise.all([
        import('adminjs'),
        import('@adminjs/nestjs'),
        import('@adminjs/prisma'),
      ]);

      // Register Prisma adapter
      AdminJS.registerAdapter({ Database, Resource });

      return {
        module: AdminModule,
        imports: [
          NestJSAdminModule.createAdminAsync({
            imports: [ConfigModule],
            inject: [ConfigService, PrismaService],  // Add PrismaService here
            useFactory: (configService: ConfigService, prismaService: PrismaService) => ({
              adminJsOptions: {
                rootPath: '/admin',
                resources: createAdminResources(prismaService),  // Use the resources
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
                    return { email, role: 'admin' };
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
            }),
          }),
        ],
        providers: [PrismaService],  // Add PrismaService as provider
        exports: [],
      };
    } catch (error) {
      console.error('Failed to initialize AdminJS:', error);
      return {
        module: AdminModule,
        imports: [],
      };
    }
  }
}