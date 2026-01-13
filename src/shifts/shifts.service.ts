import { Injectable, Inject} from '@nestjs/common';
import { CreateShiftDto } from './dto/create-shift.dto';
import { UpdateShiftDto } from './dto/update-shift.dto';
import { Shift } from './entities/shift.entity';

@Injectable()
export class ShiftsService {
  
  constructor(@Inject('SHIFT_REPOSITORY') private shiftRepository: typeof Shift){}
  
  async createShift(createShiftDto: CreateShiftDto, userId : number){

    await this.shiftRepository.create({userId, ...createShiftDto});
  }
  
  async getAllShifts(){
    return await this.shiftRepository.findAll();
  }

  async deleteShift(id : number, userId : number){
    const result = await this.shiftRepository.destroy({where : {id, userId}});
    
    if(result === 0){
      throw new Error("unable to delete.")
    }
  }
}
