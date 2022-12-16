import { Exclude } from 'class-transformer';
import { Accomodation } from 'src/accomodation/acoomodation.entity';
import { Booking } from 'src/booking/booking.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar' })
  public username: string;

  @Exclude()
  @Column({ type: 'varchar' })
  public password: string;

  @OneToMany((type) => Accomodation, (accomodation) => accomodation.user)
  listings: Accomodation[];

  @OneToMany((type) => Booking, (booking) => booking.user) bookings: Booking[];
}
