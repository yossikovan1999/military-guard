import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateSoldierDto } from './dto/create-soldier.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { first } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(@Inject('USER_REPOSITORY') private userRepository: typeof User) {}

  async addSoldier(soldier: CreateSoldierDto) {
    const hash = await bcrypt.hash(soldier.password, 10);

    //change the users password to a hashed password.
    soldier.password = hash;

    await this.userRepository.create<User>({ ...soldier });
  }

  async getByUsername(username: string): Promise<User | null> {
    
    const userData : User | null =  await this.userRepository.findOne<User>({
      where: { username: username } }
    );
    
    if(!userData){
        throw new NotFoundException('username does not exist.');
    }

    return userData.dataValues;
  }

  async getAll(): Promise<Array<User>> {
    return await this.userRepository.findAll<User>({
      attributes: { exclude: ['password'] }
    });
  }

  async getUserById(id : number){

    const userData : User | null =  await this.userRepository.findOne<User>({
      where: { id} }
    );
    
    if(!userData){
        throw new NotFoundException('user with id not found.');
    }

    return userData.dataValues;
  }
}
