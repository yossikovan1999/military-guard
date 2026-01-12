import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';
import { AssignmentsService } from './assignments.service';

@Controller('assignments')
export class AssignmentsController {

  
}
