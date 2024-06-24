import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller({ path: 'users', version: '1' })
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  async hello() {
    const data = await this.service.hello();
    return {
      message: 'success',
      data: data,
    };
  }
}
