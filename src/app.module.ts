import { Module } from '@nestjs/common';
import { UserModule as UserModuleV1 } from './modules/user/v1/user.module';
import { UserModule as UserModuleV2 } from './modules/user/v2/user.module';

@Module({
  imports: [
    // Version 1
    UserModuleV1,

    // Version 2
    UserModuleV2,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
