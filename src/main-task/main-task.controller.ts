import { Controller, UseGuards } from '@nestjs/common';
import { MainTaskService } from './main-task.service';
import { MainTaskDto } from './dto/mainTask.dto';
import { Post, Body, Get } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CurrentUser } from 'src/auth/current-user.decorator';

@Controller('main-task')
export class MainTaskController {
    constructor(private mainTask: MainTaskService) {}

    @Post('create')
    @UseGuards(JwtAuthGuard)
    async CreateMainTask(@Body() dto:MainTaskDto, @CurrentUser('id') userId: number) {
        return this.mainTask.CreateMainTask(dto, userId);
    };

    @Get('')
    @UseGuards(JwtAuthGuard)
    async GetAllMainTasks(@CurrentUser('id') userId: number) {
        return this.mainTask.GetAllMainTasks(userId);
    }
}
