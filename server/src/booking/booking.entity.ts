import { Accomodation } from 'src/accomodation/acoomodation.entity';
import { User } from 'src/user/user.entity';
import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Booking extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne((type) => Accomodation, (accomodation) => accomodation.bookings)
  accomodation: Accomodation;

  @ManyToOne((type) => User, (user) => user.bookings)
  user: User;
}
