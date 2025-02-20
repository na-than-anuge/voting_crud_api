import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { Candidate } from '../src/admin/candidate.entity'; // Correct import path

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'voting_app',
      entities: [Candidate], // Include the Candidate entity
      synchronize: true,
    }),
    AdminModule,
    UserModule,
  ],
})
export class AppModule {}