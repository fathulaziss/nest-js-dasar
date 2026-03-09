import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

const STATIC_USER = {
  id: 1,
  email: 'admin1@example.com',
  password: 'Password123',
};

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  login(email: string, password: string) {
    if (email !== STATIC_USER.email || password !== STATIC_USER.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: STATIC_USER.id, email: STATIC_USER.email };
    const token = this.jwtService.sign(payload);

    return { access_token: token };
  }
}
