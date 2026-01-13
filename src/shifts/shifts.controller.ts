import {Controller,Get,Post,Body, Patch, Param, Delete, UseGuards, ValidationPipe, Req, ParseIntPipe} from '@nestjs/common';
import { ShiftsService } from './shifts.service';
import { CreateShiftDto } from './dto/create-shift.dto';
import { UpdateShiftDto } from './dto/update-shift.dto';
import { UsersService } from 'src/users/users.service';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { AuthGuard } from 'src/auth/guards/auth.gurads';
import { RolesGuard } from 'src/auth/guards/roles.gurads';
import { Role } from 'src/auth/enums/role.enum';


// @Roles(Role.COMMANDER)
@UseGuards(RolesGuard)
@UseGuards(AuthGuard)
@Controller('shifts')
export class ShiftsController {
  constructor(private readonly shiftsService: ShiftsService) {}

  
  @Post()
  addShift(@Body(ValidationPipe) shift: CreateShiftDto, @Req() req : Request): { message: string } {
    const {user} : any = req;
    this.shiftsService.createShift(shift, user.id)
    return {message : "shift added successfully."}
  }

  @Delete(':id')
  deleteShift(@Param('id', ParseIntPipe) id: number, @Req() req : Request) : {message : string}{
    const {user} : any = req;
    this.shiftsService.deleteShift(id, user.id);
    return {message : "shift deleted successfully."}
  }

}
