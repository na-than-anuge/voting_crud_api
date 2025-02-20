import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Candidates {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  remarks: string;

  @Column({ default: 0 })
  votes: number;
}