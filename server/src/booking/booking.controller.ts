import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'src/auth/auth.dto';
import { CreateBookingDto } from './booking.dto';
import { BookingService } from './booking.service';

@Controller('booking')
export class BookingController {
  @Inject(BookingService)
  private readonly service: BookingService;

  @Post('/create')
  @UseGuards(AuthGuard('jwt'))
  public async create(
    @Body() body: CreateBookingDto,
    @Req() req: any,
  ): Promise<Response> {
    return await this.service.createBooking(body, req.user);
  }

  @Get('/user-booking')
  @UseGuards(AuthGuard('jwt'))
  public async userBooking(@Req() req: any): Promise<Response> {
    return await this.service.getAllUserBooking(req.user);
  }
}
