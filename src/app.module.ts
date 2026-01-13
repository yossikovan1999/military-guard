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
import {DatabaseModule} from "./database/database.module";

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ShiftsModule,
    AssignmentsModule,
    DatabaseModule,
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '24h' },
    }),
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
