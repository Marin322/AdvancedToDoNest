import { Module } from '@nestjs/common';
import { SubTaskController } from './sub-task.controller';
import { SubTaskService } from './sub-task.service';

@Module({
  controllers: [SubTaskController],
  providers: [SubTaskService]
})
export class SubTaskModule {}
