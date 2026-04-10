import { z } from 'zod';

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

export class LoginDto {
  static schema = LoginSchema;

  email: string;
  password: string;
}
