import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('vote')
  async vote(@Body('candidateId') candidateId: number, @Body('email') email: string) {
    return this.userService.vote(candidateId, email);
  }
}