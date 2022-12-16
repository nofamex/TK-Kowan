import { Booking } from 'src/booking/booking.entity';
import { User } from 'src/user/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Accomodation extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar' })
  public name: string;

  @Column({ type: 'varchar' })
  public location: string;

  @Column({ type: 'bigint' })
  public price: number;

  @ManyToOne((type) => User, (user) => user.listings) user: User;

  @OneToMany((type) => Booking, (booking) => booking.accomodation)
  bookings: Booking[];
}
