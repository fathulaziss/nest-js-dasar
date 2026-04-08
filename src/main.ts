import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ZodValidationService } from './common/zod-validation.service';
import { LoggingInterceptor } from './common/logging/logging.interceptor';
import { TransformInterceptor } from './common/transform/transform.interceptor';
import { HttpExceptionFilter } from './common/filters/http-exception/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ZodValidationService());
  app.useGlobalInterceptors(
    new LoggingInterceptor(),
    new TransformInterceptor(),
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
