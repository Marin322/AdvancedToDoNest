import { Controller } from '@nestjs/common';
import { MainTaskService } from './main-task.service';
import { MainTaskDto } from './dto/mainTask.dto';
import { Post, Body } from '@nestjs/common';

@Controller('main-task')
export class MainTaskController {
    constructor(private mainTask: MainTaskService) {}

    @Post('create')
    async CreateMainTask(@Body() dto:MainTaskDto) {
        return this.mainTask.CreateMainTask(dto);
    };
}
