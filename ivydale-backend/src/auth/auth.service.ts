import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    if (!user.password) throw new UnauthorizedException('Please login with Google');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    const { password: _, ...result } = user;
    return result;
  }

  async register(dto: RegisterDto) {
    const existing = await this.usersService.findByEmail(dto.email);
    if (existing) throw new ConflictException('Email already in use');

    const hashed = await bcrypt.hash(dto.password, 10);
    const user = await this.usersService.create({ ...dto, password: hashed });
    const { password: _, ...result } = user;
    return { user: result, token: this.signToken(user.id, user.email, user.role) };
  }

  async login(user: any) {
    return {
      user,
      token: this.signToken(user.id, user.email, user.role),
    };
  }

  async googleLogin(googleUser: any) {
    let user = await this.usersService.findByGoogleId(googleUser.googleId);

    if (!user) {
      user = await this.usersService.findByEmail(googleUser.email);
      if (user) {
        // Link Google to existing account
        user = await this.usersService.updateGoogleId(user.id, googleUser.googleId);
      } else {
        // Create new user
        user = await this.usersService.createGoogleUser(googleUser);
      }
    }

    const { password: _, ...result } = user;
    return {
      user: result,
      token: this.signToken(user.id, user.email, user.role),
    };
  }

  private signToken(userId: string, email: string, role: string) {
    return this.jwtService.sign({ sub: userId, email, role });
  }
}
