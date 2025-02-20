import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidates } from '../candidate.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Candidates)
    private candidateRepository: Repository<Candidates>,
  ) {}

  async getAllCandidates() {
    return this.candidateRepository.find();
  }

  async getCandidatesSortedByVotes() {
    return this.candidateRepository.find({
      order: { votes: 'DESC' },
    });
  }

  async createCandidate(name: string, remarks: string) {
    const candidate = this.candidateRepository.create({ name, remarks });
    return this.candidateRepository.save(candidate);
  }

  async updateCandidate(id: number, name: string, remarks: string) {
    const candidate = await this.candidateRepository.findOneBy({ id });
    if (!candidate) throw new Error('Candidate not found');
    candidate.name = name;
    candidate.remarks = remarks;
    return this.candidateRepository.save(candidate);
  }

  async deleteCandidate(id: number) {
    const candidate = await this.candidateRepository.findOneBy({ id });
    if (!candidate) throw new Error('Candidate not found');
    return this.candidateRepository.remove(candidate);
  }
}