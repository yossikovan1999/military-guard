import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { User } from 'src/users/entities/user.entity';


@Table
export class Assignment extends Model {

    @Column
    userId : number
}
