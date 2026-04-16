import { Test, TestingModule } from '@nestjs/testing';
import { MainTaskController } from './main-task.controller';

describe('MainTaskController', () => {
  let controller: MainTaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MainTaskController],
    }).compile();

    controller = module.get<MainTaskController>(MainTaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
