import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { CoreModule } from 'src/core/core.module';

@Module({
  controllers: [AuthController],
  providers: [ ],
  imports: [ CoreModule ],
  exports: []
})
export class AuthModule {}
