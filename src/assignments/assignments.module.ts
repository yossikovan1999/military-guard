import { Module } from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { AssignmentsController } from './assignments.controller';
import { Assignment } from './entities/assignment.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { Shift } from 'src/shifts/entities/shift.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports : [SequelizeModule.forFeature([Assignment, Shift, User])],
  controllers: [AssignmentsController],
  providers: [AssignmentsService],
})
export class AssignmentsModule {}
