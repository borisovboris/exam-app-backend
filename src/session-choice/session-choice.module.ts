import { Module } from '@nestjs/common';
import { SessionChoiceController } from './session-choice.controller';

@Module({
    controllers: [ SessionChoiceController ]
})
export class SessionChoiceModule {}
