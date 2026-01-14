import { Table, Column, Model, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { Assignment } from 'src/assignments/entities/assignment.entity';
import { User } from 'src/users/entities/user.entity';


@Table
export class Shift extends Model {

  @Column({field : 'start_time'})
  startTime: string;

  @Column({field : 'end_time'})
  endTime: string;

  @Column
  location: string;
    
  @ForeignKey(()=>User)
  @Column({field : 'created_by'})
  userId : number
  
  @BelongsTo(()=>User)
  user : User
}
