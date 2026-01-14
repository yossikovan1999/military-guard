import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';
import { User } from 'src/users/entities/user.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Shift } from 'src/shifts/entities/shift.entity';
import { Assignment } from './entities/assignment.entity';

@Injectable()
export class AssignmentsService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    @InjectModel(Assignment) private assignmentRepository: typeof Assignment,
  ) {}

  async create(createAssignmentDto: CreateAssignmentDto) {
    const user = await this.userRepository.findOne({
      where: { username: createAssignmentDto.username },
    });

    if (!user) {
      throw new NotFoundException('username not found.');
    }

    if (user.role === 'COMMANDER') {
      throw new BadRequestException('commander cannot be added to shift');
    }

    await this.assignmentRepository.create({
      userId: user.id,
      shiftId: createAssignmentDto.shiftId,
    });
  }

  async getUsersAssignments(userId: number) {
    
    const user = await this.userRepository.findOne({
      where: { id: userId },
      include: [{ model: Shift, attributes : { exclude: ["Assignment"]}}],
      attributes: { exclude: ['password'] },
    });

    if (!user) {
      throw new NotFoundException('user not found.');
    }
    
    console.log(user);
    

    return user.dataValues;
  }
}
