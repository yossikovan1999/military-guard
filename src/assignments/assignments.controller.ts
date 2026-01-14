import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, Req, UseGuards } from '@nestjs/common';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';
import { AssignmentsService } from './assignments.service';
import { Assignment } from './entities/assignment.entity';
import { RolesGuard } from 'src/auth/guards/roles.gurads';
import { AuthGuard } from 'src/auth/guards/auth.gurads';

@Controller('assignments')
export class AssignmentsController {

    constructor(private readonly assignmentsService : AssignmentsService){}

    @Post()
    async addAssignment(@Body(ValidationPipe) createAssignmentDto : CreateAssignmentDto){
        await this.assignmentsService.create(createAssignmentDto);
        return {message : "assignment added successfully."}
    }
    

    @UseGuards(RolesGuard)
    @UseGuards(AuthGuard)
    @Get()
    async getUsersAssignments(@Req() req : Request){
        const {user} : any = req;
        console.log(user);
        
        return await this.assignmentsService.getUsersAssignments(user.id);
    }
  
}
