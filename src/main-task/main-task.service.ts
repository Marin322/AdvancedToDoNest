import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MainTaskDto } from './dto/mainTask.dto';

@Injectable()
export class MainTaskService {
    constructor(private prisma: PrismaService) {}
    async CreateMainTask(dto: MainTaskDto) {
        const newTask = await this.prisma.mainTask.create({
            data: {
                name: dto.name
            }
        });
        return newTask;
    }
}
