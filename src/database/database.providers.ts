
import { Sequelize } from 'sequelize-typescript';
import {User} from "../users/entities/user.entity"
import { Shift } from 'src/shifts/entities/shift.entity';
import { Assignment } from 'src/assignments/entities/assignment.entity';


export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'nest',
      });
      sequelize.addModels([User, Shift, Assignment]);
      await sequelize.sync();
      return sequelize;
    },
  },
];