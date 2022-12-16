import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Accomodation } from './acoomodation.entity';
import { AccomodationService } from './accomodation.service';
import { AccomodationController } from './accomodation.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Accomodation])],
  providers: [AccomodationService],
  controllers: [AccomodationController],
})
export class AccomodationModule {}
