import { Module } from '@nestjs/common';
import AdminJS from 'adminjs';
import { AdminModule } from '@adminjs/nestjs';
import { PrismaClient } from '@prisma/client';
import { Database, Resource, getModelByName } from '@adminjs/prisma';

AdminJS.registerAdapter({ Database, Resource });

const prisma = new PrismaClient();

@Module({
  imports: [
    AdminModule.createAdminAsync({
      useFactory: () => ({
        adminJsOptions: {
          rootPath: '/admin',
          resources: [
            {
              resource: { model: getModelByName('User'), client: prisma },
              options: {
                navigation: { name: 'Users', icon: 'User' },
                listProperties: ['id', 'email', 'firstName', 'lastName', 'role', 'createdAt'],
                editProperties: ['email', 'firstName', 'lastName', 'phone', 'role', 'isActive'],
                filterProperties: ['email', 'role', 'isActive'],
              },
            },
            {
              resource: { model: getModelByName('Brand'), client: prisma },
              options: {
                navigation: { name: 'Catalogue', icon: 'Tag' },
                listProperties: ['id', 'name', 'slug', 'isActive'],
                editProperties: [
                  'name', 'slug', 'description', 'logo', 'banner', 'website',
                  'facebook', 'instagram', 'twitter', 'tiktok', 'youtube', 'isActive',
                ],
              },
            },
            {
              resource: { model: getModelByName('Category'), client: prisma },
              options: {
                navigation: { name: 'Catalogue', icon: 'Folder' },
                listProperties: ['id', 'name', 'slug', 'isActive'],
              },
            },
            {
              resource: { model: getModelByName('Product'), client: prisma },
              options: {
                navigation: { name: 'Catalogue', icon: 'ShoppingBag' },
                listProperties: ['id', 'name', 'price', 'stock', 'isFeatured', 'isActive', 'brandId'],
                editProperties: [
                  'name', 'slug', 'description', 'price', 'comparePrice',
                  'sku', 'stock', 'isFeatured', 'isActive', 'brandId', 'categoryId',
                ],
                filterProperties: ['isFeatured', 'isActive', 'brandId', 'categoryId'],
              },
            },
            {
              resource: { model: getModelByName('Order'), client: prisma },
              options: {
                navigation: { name: 'Orders', icon: 'ShoppingCart' },
                listProperties: ['id', 'orderNumber', 'status', 'paymentStatus', 'total', 'createdAt'],
                editProperties: ['status', 'paymentStatus', 'trackingNumber'],
                actions: { new: { isAccessible: false } },
              },
            },
            {
              resource: { model: getModelByName('BlogPost'), client: prisma },
              options: {
                navigation: { name: 'Blog', icon: 'Newspaper' },
                listProperties: ['id', 'title', 'status', 'authorId', 'publishedAt'],
                editProperties: [
                  'title', 'slug', 'excerpt', 'body', 'coverImage', 'coverImagePublicId',
                  'status', 'authorId',
                ],
              },
            },
            {
              resource: { model: getModelByName('BlogAuthor'), client: prisma },
              options: { navigation: { name: 'Blog', icon: 'User' } },
            },
            {
              resource: { model: getModelByName('BlogTag'), client: prisma },
              options: { navigation: { name: 'Blog', icon: 'Tag' } },
            },
          ],
          branding: {
            companyName: 'Ivydale Fashion',
            logo: false,
            favicon: '/favicon.ico',
          },
        },
        auth: {
          authenticate: async (email: string, password: string) => {
            const adminEmail = process.env.ADMIN_EMAIL;
            const adminPassword = process.env.ADMIN_PASSWORD;
            if (email === adminEmail && password === adminPassword) {
              return Promise.resolve({ email });
            }
            return null;
          },
          cookieName: 'adminjs',
          cookiePassword: process.env.COOKIE_SECRET || 'secret-cookie-password',
        },
        sessionOptions: {
          resave: true,
          saveUninitialized: true,
          secret: process.env.COOKIE_SECRET || 'secret-cookie-password',
        },
      }),
    }),
  ],
})
export class AdminPanelModule {}
