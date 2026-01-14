import {Controller,Get,Post,Body, Patch, Param, Delete, UseGuards, ValidationPipe, Req, ParseIntPipe, Put} from '@nestjs/common';
import { ShiftsService } from './shifts.service';
import { CreateShiftDto } from './dto/create-shift.dto';
import { UpdateShiftDto } from './dto/update-shift.dto';
import { UsersService } from 'src/users/users.service';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { AuthGuard } from 'src/auth/guards/auth.gurads';
import { RolesGuard } from 'src/auth/guards/roles.gurads';
import { Role } from 'src/auth/enums/role.enum';


@Roles(Role.COMMANDER)
@UseGuards(RolesGuard)
@UseGuards(AuthGuard)
@Controller('shifts')
export class ShiftsController {
  constructor(private readonly shiftsService: ShiftsService) {}
  
  @Get()
  getAllShifts(){
    return this.shiftsService.getAllShifts();
  }
  
  @Post()
  async addShift(@Body(ValidationPipe) shift: CreateShiftDto, @Req() req : Request){
    const {user} : any = req;
    await this.shiftsService.createShift(shift, user.id)
    return {message : "shift added successfully."}
  }

  @Delete(':id')
  async deleteShift(@Param('id', ParseIntPipe) id: number, @Req() req : Request){
    const {user} : any = req;
    await this.shiftsService.deleteShift(id, user.id);
    return {message : "shift deleted successfully."}
  }

  @Put(':id')
  async updateShift(@Param('id', ParseIntPipe) id : number, @Body(ValidationPipe) updateShiftDto : UpdateShiftDto){
      await this.shiftsService.updateShift(id, updateShiftDto)
      return {message : "shift updated"}
  }

}
