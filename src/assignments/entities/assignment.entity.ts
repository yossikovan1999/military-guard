import { Table, Column, Model, HasMany, ForeignKey } from 'sequelize-typescript';
import { Shift } from 'src/shifts/entities/shift.entity';
import { User } from 'src/users/entities/user.entity';

@Table
export class Assignment extends Model {
  @ForeignKey(() => User)
  @Column({field : "user_id"})
  userId: number;

  @ForeignKey(() => Shift)
  @Column({field : "shift_id"})
  shiftId: number;
}
