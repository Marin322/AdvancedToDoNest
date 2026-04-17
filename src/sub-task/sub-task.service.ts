import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SubTaskDto } from './dto/subTask.dto';

@Injectable()
export class SubTaskService {
    constructor(private prisma: PrismaService) {}

    async CreateSubTask(dto: SubTaskDto, userId: number) {
        const mainTask = await this.prisma.mainTask.findFirst({
            where: {
                id: dto.mainTaskId,
                userId: userId
            },
        });
        if (!mainTask) {
            throw new NotFoundException('Главная задача не найдена');
        }

        return this.prisma.$transaction(async (tx) => {
            const subTask = await tx.subTask.create({
                data: {
                    title: dto.name,
                    mainTaskId: dto.mainTaskId
                },
            });

            await tx.mainTask.update({
                where: { id: dto.mainTaskId },
                data: { countTasks: {increment: 1} }
            })

            return subTask;
        })
    }
}
