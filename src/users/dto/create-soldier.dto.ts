import { IsString, IsInt, Min, Max, IsEmail, IsNotEmpty, IsEnum} from 'class-validator';

export class CreateSoldierDto{
   
   @IsNotEmpty()
   @IsString()
   username : string
   
   @IsNotEmpty()
   name : string

   @IsNotEmpty()
   lastName : string
   
   @IsNotEmpty()
   @IsEmail()
   email : string
   
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