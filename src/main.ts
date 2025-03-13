import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger';
import { ValidationPipe } from '@nestjs/common';
import 'dotenv/config'; // Load environment variables from .env file

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Check if the app is running in production mode
  const isProduction = process.env.NODE_ENV === 'production';

  // Use validation pipe to automatically transform incoming request data to DTO instances
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      validationError: { target: false },
    }),
  );

  // Set up Swagger only in non-production environments (optional)
  if (!isProduction) {
    setupSwagger(app);
  }

  // Set up CORS to allow requests from all origins
  app.enableCors();

  // Start the application on the specified port
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}

void bootstrap();
