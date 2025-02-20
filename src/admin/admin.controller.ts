import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('candidates')
  async getAllCandidates() {
    return this.adminService.getAllCandidates();
  }

  @Get('candidates/sorted')
  async getCandidatesSortedByVotes() {
    return this.adminService.getCandidatesSortedByVotes();
  }

  @Post('candidates')
  async createCandidate(@Body('name') name: string, @Body('remarks') remarks: string) {
    return this.adminService.createCandidate(name, remarks);
  }

  @Put('candidates/:id')
  async updateCandidate(
    @Param('id') id: number,
    @Body('name') name: string,
    @Body('remarks') remarks: string,
  ) {
    return this.adminService.updateCandidate(id, name, remarks);
  }

  @Delete('candidates/:id')
  async deleteCandidate(@Param('id') id: number) {
    return this.adminService.deleteCandidate(id);
  }
}