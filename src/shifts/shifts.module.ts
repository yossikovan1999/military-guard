import { Module } from '@nestjs/common';
import { ShiftsService } from './shifts.service';
import { ShiftsController } from './shifts.controller';
import { userProviders } from './shifts.provider';

@Module({
  controllers: [ShiftsController],
  providers: [ShiftsService, ...userProviders],
})
export class ShiftsModule {}
