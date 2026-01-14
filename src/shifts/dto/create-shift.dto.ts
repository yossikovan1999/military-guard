import { IsString, IsMilitaryTime} from 'class-validator';

export class CreateShiftDto {

    @IsMilitaryTime()
    startTime : String
    
    @IsMilitaryTime()
    endTime : String
    
    @IsString()
    location :String

}
