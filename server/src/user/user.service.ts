import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  async findUser(username: string): Promise<User> {
    const user: User = await this.repository.findOne({
      where: { username },
    });

    return user;
  }

  async createUser(username: string, password: string): Promise<User> {
    const user: User = await this.repository.findOne({
      where: { username },
    });

    if (user) {
      return null;
    }

    const newUser = new User();
    newUser.username = username;
    newUser.password = bcrypt.hashSync(password, 10);

    await this.repository.save(newUser);

    return newUser;
  }
}
