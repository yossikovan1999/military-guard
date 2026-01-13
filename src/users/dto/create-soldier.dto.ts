import { IsString, IsInt, Min, Max, IsEmail, IsNotEmpty, IsEnum} from 'class-validator';

export class CreateSoldierDto{
   
   @IsNotEmpty()
   @IsString()
   username : String
   
   @IsNotEmpty()
   name : String

   @IsNotEmpty()
   lastName : String
   
   @IsNotEmpty()
   @IsEmail()
   email : String
   
   @IsNotEmpty()
   password : string
    
   @IsNotEmpty()
   militaryId: number
   
   @IsNotEmpty()
   tz : number

   @IsNotEmpty()
   @IsEnum(['SOLDIER', 'COMMANDER'])
   role : 'SOLDIER' | 'COMMANDER'
}