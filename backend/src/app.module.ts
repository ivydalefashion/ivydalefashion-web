import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { CategoriesModule } from './categories/categories.module';
//import { ReviewsModule } from './reviews/reviews.module';

// Import other modules as needed

@Module({
  imports: [
    // Config must be first
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    
    // Database
    PrismaModule,
    
    // Auth
    AuthModule,
    
    // Admin (with error handling)
    AdminModule.forRoot(),
    
    // Add other modules here
    UsersModule,
    ProductsModule,
    OrdersModule,
    CategoriesModule,
  ],
})
export class AppModule {}