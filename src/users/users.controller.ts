import { Controller, Post, Get, Body, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { CreateSoldierDto } from './dto/create-soldier.dto';
import { UsersService } from './users.service';
import { Role } from 'src/auth/enums/role.enum';
import { Roles } from '../auth/decorators/roles.decorator';
import { AuthGuard } from 'src/auth/guards/auth.gurads';
import { RolesGuard } from 'src/auth/guards/roles.gurads';


@Controller('users')
export class UsersController {
    
    constructor(private readonly usersService : UsersService){}
    
    @Post()
    async addSoldier(@Body(ValidationPipe) soldier : CreateSoldierDto) : Promise<{message : string}>{
        await this.usersService.addSoldier(soldier);
        return {message : "soldier added successfully."}
    }
    
    @UseGuards(AuthGuard)
    @Get()
    getUser(@Req() req : Request){
        const {user} : any = req;
        return this.usersService.getUserById(user.id);        
    }

    
    @Roles(Role.COMMANDER)
    @UseGuards(RolesGuard)
    @UseGuards(AuthGuard)
    @Get('commanders')
    getAllUsers() {
        return this.usersService.getAll();
    }

}
