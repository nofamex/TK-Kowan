import { IsNumber, IsString } from 'class-validator';

export class CreateBookingDto {
  @IsNumber()
  public readonly accomodationId: number;
}
