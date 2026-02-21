import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global prefix
  app.setGlobalPrefix('api');

  // CORS
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  });

  // Global validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Ivydale Fashion API')
    .setDescription('The Ivydale Fashion e-commerce REST API')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'JWT',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT || 3001;
  await app.listen(port);

  // After app.listen
  // temp filesystem to log all registered routes
    const server = app.getHttpServer();
    const router = server._events.request._router;

    console.log('\n📋 Registered Routes:');
    router.stack.forEach((layer) => {
      if (layer.route) {
        console.log(`  ${Object.keys(layer.route.methods)} ${layer.route.path}`);
      }
    });
    console.log('\n');
  
  console.log(`🚀 Server running on http://localhost:${port}`);
  console.log(`📖 Swagger: http://localhost:${port}/api/docs`);
  console.log(`🔧 Admin: http://localhost:${port}/admin`);
}

bootstrap();