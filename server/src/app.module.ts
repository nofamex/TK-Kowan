import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import 'dotenv/config';
import { User } from './user/user.entity';
import { AuthModule } from './auth/auth.module';
import { AccomodationModule } from './accomodation/accomodation.module';
import { Accomodation } from './accomodation/acoomodation.entity';
import { BookingModule } from './booking/booking.module';
import { Booking } from './booking/booking.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User, Accomodation, Booking],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    AccomodationModule,
    BookingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
