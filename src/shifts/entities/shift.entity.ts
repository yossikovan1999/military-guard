import { Table, Column, Model, Unique, AutoIncrement, PrimaryKey, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from 'src/users/entities/user.entity';

@Table({tableName : 'Shifts'})
export class Shift extends Model {

  @Column({field : 'start_time'})
  startTime: string;

  @Column({field : 'end_time'})
  endTime: string;

  @Column
  location: string;
  
  @ForeignKey(()=>User)
  @Column({field : 'user_id'})
  userId : number
  
  @BelongsTo(()=>User)
  user : User
}
