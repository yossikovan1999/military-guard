import { Injectable } from '@nestjs/common';
import { CreateSoldierDto } from './dto/create-soldier.dto';

@Injectable()
export class UsersService {
    
    private soldiers : CreateSoldierDto[] = [];

    addSoldier(soldier : CreateSoldierDto){
        this.soldiers.push(soldier);
    }

    getSoldiers() : Array<CreateSoldierDto>{
        return [...this.soldiers];
    }
}
