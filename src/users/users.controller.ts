import { Controller, Post, Get, Body, ValidationPipe } from '@nestjs/common';
import { CreateSoldierDto } from './dto/create-soldier.dto';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {

    constructor(private readonly usersService : UsersService){}

    @Post('soldier')
    addSoldier(@Body(ValidationPipe) soldier : CreateSoldierDto) : {message : string}{
        this.usersService.addSoldier(soldier);
        return {message : "soldier added successfully."}
    }
    
    @Get('soldier')
    getAllSoldiers() : Array<CreateSoldierDto>{
        return this.usersService.getSoldiers();
    }

}
