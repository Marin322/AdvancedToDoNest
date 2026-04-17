import { Controller, UseGuards } from '@nestjs/common';
import { SubTaskService } from './sub-task.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { SubTaskDto } from './dto/subTask.dto';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { Post, Body } from '@nestjs/common';

@Controller('sub-task')
export class SubTaskController {
    constructor(private subTask: SubTaskService) {}

    @Post('create')
    @UseGuards(JwtAuthGuard)
    async CreateSubTask(@Body() dto: SubTaskDto, @CurrentUser('id') userId: number) {
        return this.subTask.CreateSubTask(dto, userId);
    }
}
