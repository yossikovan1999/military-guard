import { IsDateString, IsTimeZone, IsString, IsMilitaryTime, ValidateIf} from 'class-validator';

export class CreateShiftDto {

    @IsMilitaryTime()
    startTime : String
    
    @IsMilitaryTime()
    endTime : String
    
    @IsString()
    location :String

}
