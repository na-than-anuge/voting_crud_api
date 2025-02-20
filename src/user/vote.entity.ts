// src/user/vote.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Candidate } from '../admin/candidate.entity';
import { IsString } from 'class-validator';

@Entity()
export class Vote {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column()
  gmail: string;

  @ManyToOne(() => Candidate, (candidate) => candidate.votes)
  candidate: Candidate;
}