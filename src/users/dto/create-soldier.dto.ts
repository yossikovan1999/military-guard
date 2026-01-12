import { IsString, IsInt, Min, Max, IsEmail, IsNotEmpty, IsEnum} from 'class-validator';

export class CreateSoldierDto{
   
   id : number

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
   military_id: number
   
   @IsNotEmpty()
   tz : number

   @IsNotEmpty()
   @IsEnum(['SOLDIER', 'COMMANDER'])
   role : 'SOLDIER' | 'COMMANDER'
}