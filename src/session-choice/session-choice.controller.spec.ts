import { Test, TestingModule } from '@nestjs/testing';
import { SessionChoiceController } from './session-choice.controller';

describe('SessionChoiceController', () => {
  let controller: SessionChoiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SessionChoiceController],
    }).compile();

    controller = module.get<SessionChoiceController>(SessionChoiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
