// src/user/user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Vote } from './vote.entity';
import { Candidate } from '../admin/candidate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vote, Candidate])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}