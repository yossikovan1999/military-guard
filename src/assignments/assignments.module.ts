import { Module } from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { AssignmentsController } from './assignments.controller';
import { userProviders } from './assignments.provider';

@Module({
  controllers: [AssignmentsController],
  providers: [AssignmentsService, ...userProviders],
})
export class AssignmentsModule {}
