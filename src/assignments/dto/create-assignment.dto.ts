import { Transform } from 'class-transformer';
import { IsString, IsInt, Min, Max, IsEmail, IsNotEmpty, IsEnum} from 'class-validator';

export class CreateAssignmentDto {
    
    @IsString()
    @IsNotEmpty()
    username : string;
   
    @IsInt()
    @IsNotEmpty()
    shiftId : number;
}
