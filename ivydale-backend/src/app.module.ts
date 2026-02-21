import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BrandsModule } from './brands/brands.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { BlogModule } from './blog/blog.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { AdminPanelModule } from './admin/admin.module';

@Module({
  imports: [
    // Load .env globally
    ConfigModule.forRoot({ isGlobal: true }),

    // Database
    PrismaModule,

    // Admin panel
    AdminPanelModule,

    // Feature modules
    AuthModule,
    UsersModule,
    BrandsModule,
    CategoriesModule,
    ProductsModule,
    OrdersModule,
    WishlistModule,
    BlogModule,
    CloudinaryModule,
  ],
})
export class AppModule {}
