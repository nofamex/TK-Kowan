import { Controller, Inject } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { LoginRequestDto, RegisterRequestDto, Response } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  @Inject(AuthService)
  private readonly authService: AuthService;

  @Post('register')
  private async register(@Body() body: RegisterRequestDto): Promise<Response> {
    return this.authService.register(body);
  }

  @Post('login')
  private async login(@Body() body: LoginRequestDto): Promise<Response> {
    return this.authService.login(body);
  }
}
