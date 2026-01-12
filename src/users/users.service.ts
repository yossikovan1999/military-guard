import { Injectable } from '@nestjs/common';
import { CreateSoldierDto } from './dto/create-soldier.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    
    private soldiers : Array<CreateSoldierDto> = [];
    private id = 0;

    async addSoldier(soldier : CreateSoldierDto){
        
        const hash = await bcrypt.hash(soldier.password, 10);
        
        //change the users password to a hashed password.
        soldier.password = hash;
        
        this.id+=1;
        soldier.id = this.id;

        this.soldiers.push(soldier);
    }

    getByUsername(username : string){
        return this.soldiers.find((user)=>user.username === username);
    }

    getSoldiers() : Array<CreateSoldierDto>{
        return this.soldiers.filter((user)=>user.role === 'SOLDIER');
    }

    getCommanders() : Array<CreateSoldierDto> {
        return this.soldiers.filter((user)=>user.role === 'COMMANDER');
    }
}