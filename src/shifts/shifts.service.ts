import { Injectable, Inject} from '@nestjs/common';
import { CreateShiftDto } from './dto/create-shift.dto';
import { Shift } from './entities/shift.entity';
import { InjectModel } from '@nestjs/sequelize';
import { UpdateShiftDto } from './dto/update-shift.dto';

@Injectable()
export class ShiftsService {
  
  constructor(@InjectModel(Shift) private shiftRepository: typeof Shift){}
  
  async createShift(createShiftDto: CreateShiftDto, userId : number){

    await this.shiftRepository.create({userId, ...createShiftDto});
  }
  
  async getAllShifts() : Promise<Shift[] | null>{
    return await this.shiftRepository.findAll();
  }

  async deleteShift(id : number, userId : number){
    const result = await this.shiftRepository.destroy({where : {id, userId}});
    
    if(result === 0){
      throw new Error("unable to delete.")
    }
  }

  async updateShift(id : number, updateShiftDto : UpdateShiftDto){
 
    await this.shiftRepository.update({...updateShiftDto}, {where : {id : id}});
  }
}
