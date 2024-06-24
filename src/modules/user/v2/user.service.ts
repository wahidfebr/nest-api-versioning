import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async hello(): Promise<string> {
    return 'hello world v2';
  }
}
