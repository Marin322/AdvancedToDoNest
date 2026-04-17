import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MainTaskDto } from './dto/mainTask.dto';

@Injectable()
export class MainTaskService {
    constructor(private prisma: PrismaService) {}
    async CreateMainTask(dto: MainTaskDto, userId: number) {
        const newTask = await this.prisma.mainTask.create({
            data: {
                name: dto.name,
                userId: userId
            }
        })
        return newTask;
    };

    async GetAllMainTasks(id: number) {
        const mainTasks = await this.prisma.mainTask.findMany({
            where: {
                userId: id
            },
            orderBy: { createdAt: 'desc' },
            include: {
                _count: {
                    select: {subTasks: true}
                }
            }
        });
        return mainTasks;
    };
}
 // сделать ещё запрос, для подгрузки подзадач при необходимости