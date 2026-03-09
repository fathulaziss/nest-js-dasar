import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';
import { z } from 'zod';

type ZodSchemaType = z.ZodSchema<any>;

interface ZodSchemaClass {
  schema: ZodSchemaType;
}

@Injectable()
export class ZodValidationService implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): any {
    if (this.isZodSchema(metadata.metatype)) {
      const schema = metadata.metatype.schema;
      const result = schema.safeParse(value);

      if (!result.success) {
        throw new BadRequestException({
          message: 'Invalid schema',
          error: result.error.issues.map((err) => ({
            path: err.path.join('.'),
            message: err.message,
          })),
        });
      }
      return result.data;
    }
    return value;
  }

  private isZodSchema(metatype?: unknown): metatype is ZodSchemaClass {
    if (typeof metatype !== 'function') return false;

    const schema = (metatype as unknown as ZodSchemaClass).schema;
    return schema !== undefined && typeof schema.safeParse === 'function';
  }
}
