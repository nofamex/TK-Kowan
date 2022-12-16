import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from './booking.entity';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { AccomodationModule } from 'src/accomodation/accomodation.module';

@Module({
  imports: [TypeOrmModule.forFeature([Booking]), AccomodationModule],
  providers: [BookingService],
  controllers: [BookingController],
})
export class BookingModule {}
