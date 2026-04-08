import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ZodValidationService } from './common/zod-validation.service';
import { LoggingInterceptor } from './common/logging/logging.interceptor';
import { TransformInterceptor } from './common/transform/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ZodValidationService());
  app.useGlobalInterceptors(
    new LoggingInterceptor(),
    new TransformInterceptor(),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
