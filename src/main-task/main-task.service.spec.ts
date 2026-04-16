import { Test, TestingModule } from '@nestjs/testing';
import { MainTaskService } from './main-task.service';

describe('MainTaskService', () => {
  let service: MainTaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MainTaskService],
    }).compile();

    service = module.get<MainTaskService>(MainTaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
