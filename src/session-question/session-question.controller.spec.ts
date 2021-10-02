import { Test, TestingModule } from '@nestjs/testing';
import { SessionQuestionController } from './session-question.controller';

describe('SessionQuestionController', () => {
  let controller: SessionQuestionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SessionQuestionController],
    }).compile();

    controller = module.get<SessionQuestionController>(SessionQuestionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
