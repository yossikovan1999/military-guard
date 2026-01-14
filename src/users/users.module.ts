import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entities/user.entity';

@Module({
  imports : [SequelizeModule.forFeature([User])],
  exports : [UsersService],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}

