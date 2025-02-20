import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidate } from '../admin/candidate.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Candidate)
    private candidateRepository: Repository<Candidate>,
  ) {}

  async vote(candidateId: number, email: string) {
    const candidate = await this.candidateRepository.findOneBy({ id: candidateId });
    if (!candidate) throw new Error('Candidate not found');

    candidate.votes += 1;
    await this.candidateRepository.save(candidate);

    return { message: 'Vote recorded successfully', email };
  }
}