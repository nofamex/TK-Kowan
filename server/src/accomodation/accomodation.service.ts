import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from 'src/auth/auth.dto';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreateAccomodationDto } from './accomodation.dto';
import { Accomodation } from './acoomodation.entity';

@Injectable()
export class AccomodationService {
  @InjectRepository(Accomodation)
  private readonly repository: Repository<Accomodation>;

  async createAccomodation(
    data: CreateAccomodationDto,
    user: any,
  ): Promise<Response> {
    const accom = new Accomodation();
    accom.name = data.name;
    accom.location = data.location;
    accom.price = data.price;
    accom.user = user;

    await this.repository.save(accom);

    return {
      status: HttpStatus.OK,
      error: [],
      data: {
        id: accom.id,
        name: accom.name,
        location: accom.location,
        price: accom.price,
      },
    };
  }

  async getAllUserAccom(user: any): Promise<Response> {
    const accom = await this.repository.find({
      relations: {
        user: false,
      },
      where: { user: { username: user.username } },
    });

    return {
      status: HttpStatus.OK,
      error: [],
      data: accom,
    };
  }

  async getAllAccom(): Promise<Response> {
    const accom = await this.repository.find();

    return {
      status: HttpStatus.OK,
      error: [],
      data: accom,
    };
  }

  async finAccom(id: number): Promise<Accomodation> {
    const accom = await this.repository.findOne({
      relations: { user: true },
      where: { id: id },
    });
    return accom;
  }
}
