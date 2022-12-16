import { Injectable, Inject } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { RegisterRequestDto, Response } from './auth.dto';
import { HttpStatus } from '@nestjs/common/enums';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  @Inject(UserService)
  private readonly userService: UserService;

  @Inject(JwtService)
  private readonly jwtService: JwtService;

  async login({ username, password }: RegisterRequestDto): Promise<Response> {
    const user = await this.userService.findUser(username);

    if (!user) {
      return {
        status: HttpStatus.BAD_REQUEST,
        error: ['no user found'],
        data: null,
      };
    }

    const isCorrectPassword: boolean = bcrypt.compareSync(
      password,
      user.password,
    );

    if (!isCorrectPassword) {
      return {
        status: HttpStatus.BAD_REQUEST,
        error: ['wrong password'],
        data: null,
      };
    }

    return {
      status: HttpStatus.OK,
      error: [],
      data: {
        token: this.jwtService.sign({
          username: user.username,
          password: user.password,
        }),
      },
    };
  }

  async register({
    username,
    password,
  }: RegisterRequestDto): Promise<Response> {
    const user = await this.userService.createUser(username, password);

    if (user === null) {
      return {
        status: HttpStatus.BAD_REQUEST,
        error: ['already exist user with given username'],
        data: null,
      };
    }

    return {
      status: HttpStatus.OK,
      error: [],
      data: {
        id: user.id,
        username: user.username,
      },
    };
  }
}
