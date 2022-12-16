import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccomodationService } from 'src/accomodation/accomodation.service';
import { Accomodation } from 'src/accomodation/acoomodation.entity';
import { Response } from 'src/auth/auth.dto';
import { Repository } from 'typeorm';
import { CreateBookingDto } from './booking.dto';
import { Booking } from './booking.entity';

@Injectable()
export class BookingService {
  @InjectRepository(Booking)
  private readonly repository: Repository<Booking>;

  @Inject(AccomodationService)
  private readonly accomodationService: AccomodationService;

  async createBooking(
    { accomodationId }: CreateBookingDto,
    user: any,
  ): Promise<Response> {
    const accom: Accomodation = await this.accomodationService.finAccom(
      accomodationId,
    );

    if (!accom) {
      return {
        status: HttpStatus.BAD_REQUEST,
        error: ['no accomodation found'],
        data: null,
      };
    }

    if (accom.user.id === user.id) {
      return {
        status: HttpStatus.BAD_REQUEST,
        error: ['cant book your own place'],
        data: null,
      };
    }

    const booking = new Booking();
    booking.user = user;
    booking.accomodation = accom;

    await this.repository.save(booking);
    return {
      status: HttpStatus.OK,
      error: [],
      data: {
        id: booking.id,
        user: {
          username: user.username,
        },
        accomodation: {
          name: accom.name,
          location: accom.location,
          price: accom.price,
          owner: {
            username: accom.user.username,
          },
        },
      },
    };
  }

  async getAllUserBooking(user: any): Promise<Response> {
    const bookings = await this.repository.find({
      relations: { user: false, accomodation: true },
      where: { user: { username: user.username } },
    });
    return {
      status: HttpStatus.OK,
      error: [],
      data: bookings,
    };
  }
}
