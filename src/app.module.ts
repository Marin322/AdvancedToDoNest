import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { MainTaskModule } from './main-task/main-task.module';
import { PrismaModule } from './prisma/prisma.module';
import { SubTaskModule } from './sub-task/sub-task.module';

@Module({
  imports: [PrismaModule,AuthModule, MainTaskModule, SubTaskModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
