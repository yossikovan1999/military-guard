import { Table, Column, Model, Unique, AutoIncrement, PrimaryKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { Assignment } from 'src/assignments/entities/assignment.entity';
import { Shift } from 'src/shifts/entities/shift.entity';

@Table
export class User extends Model {
  
  @Unique
  @Column
  username: string;

  @Column
  name: number;

  @Column({field : "last_name"})
  lastName: string;
  
  @Unique
  @Column
  email : string;

  @Column
  password : string;
  
  @Unique
  @Column
  tz : string;

  @Column({field : "military_id"})
  militaryId : string;
  
  @Column
  role : 'SOLDIER' | 'COMMANDER'

  @BelongsToMany(()=>Shift, ()=>Assignment)
  shifts : Shift[]
}