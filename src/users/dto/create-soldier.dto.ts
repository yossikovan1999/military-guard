import { IsString, IsInt, Min, Max, IsEmail, IsNotEmpty} from 'class-validator';

export class CreateSoldierDto{
   
   @IsNotEmpty()
   @IsString()
   name : String
   
   @IsNotEmpty()
   lastName : String
   
   @IsNotEmpty()
   @IsEmail()
   email : String
   
   @IsNotEmpty()
   password : string
    
   @IsNotEmpty()
   military_id: number
   
   @IsNotEmpty()
   tz : number
}