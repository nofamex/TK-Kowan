import { IsNumber, IsString } from 'class-validator';

export class CreateAccomodationDto {
  @IsString()
  public readonly name: string;

  @IsString()
  public readonly location: string;

  @IsNumber()
  public readonly price: number;
}
