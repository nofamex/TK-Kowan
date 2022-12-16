import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import 'dotenv/config';
import { Inject } from '@nestjs/common/decorators';
import { UserService } from 'src/user/user.service';
import { UnauthorizedException } from '@nestjs/common/exceptions';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  @Inject(UserService)
  private readonly userService: UserService;

  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any) {
    const user = this.userService.findUser(payload.username);
    if (!user) {
      throw new UnauthorizedException();
    }

    return { username: payload.username };
  }
}
