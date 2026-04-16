import { Module } from '@nestjs/common';
import { MainTaskController } from './main-task.controller';
import { MainTaskService } from './main-task.service';

@Module({
  controllers: [MainTaskController],
  providers: [MainTaskService]
})
export class MainTaskModule {}
