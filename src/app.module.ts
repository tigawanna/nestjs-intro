import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [NinjasModule, UsersModule, DatabaseModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
