import { z } from 'zod';

export const CreateProductSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  price: z.number().positive('Price must be a positive'),
});

export class CreateProductsDto {
  static schema = CreateProductSchema;

  name: string;
  price: number;
}
