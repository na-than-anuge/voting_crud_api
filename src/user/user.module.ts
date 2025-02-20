import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Candidates } from '../candidate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Candidates])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}