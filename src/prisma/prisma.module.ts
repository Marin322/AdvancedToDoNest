import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Делает модуль доступным везде без повторного импорта
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Обязательно экспортируем, чтобы другие видели
})
export class PrismaModule {}