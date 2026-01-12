import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  exports : [UsersService],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
