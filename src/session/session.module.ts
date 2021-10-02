import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { SessionController } from './session.controller';

@Module({
  imports: [ CoreModule ],
  controllers: [ SessionController ]
})
export class SessionModule {

}
