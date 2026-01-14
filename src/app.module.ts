import {Module, NestModule, RequestMethod, MiddlewareConsumer,} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ShiftsController } from './shifts/shifts.controller';
import { AssignmentsController } from './assignments/assignments.controller';
import { ShiftsModule } from './shifts/shifts.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { Sequelize } from 'sequelize-typescript';
import { SequelizeModule } from '@nestjs/sequelize';
import {User} from "./users/entities/user.entity"
import { Shift } from 'src/shifts/entities/shift.entity';
import { Assignment } from './assignments/entities/assignment.entity';

@Module({
  imports: [
    
    UsersModule,
    AuthModule,
    ShiftsModule,
    AssignmentsModule,
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '24h' },
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest',
      models: [User, Shift, Assignment],
      synchronize: true,
      autoLoadModels : true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private sequelize: Sequelize) {}
}
