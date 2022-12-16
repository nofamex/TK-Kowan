import { IsString } from 'class-validator';

export class RegisterRequestDto {
  @IsString()
  public readonly username: string;

  @IsString()
  public readonly password: string;
}

export class LoginRequestDto {
  @IsString()
  public readonly username: string;

  @IsString()
  public readonly password: string;
}

export class Response {
  status: number;
  error: string[];
  data: any;
}
