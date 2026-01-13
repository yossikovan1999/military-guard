import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { userProviders } from './users.provider';

@Module({
  exports : [UsersService],
  controllers: [UsersController],
  providers: [UsersService, ...userProviders]
})
export class UsersModule {}

