import { MkCoreSampleService } from './sample.service';

describe('Sample Service', () => {
  let sut: MkCoreSampleService;

  beforeEach(() => {
    sut = new MkCoreSampleService();
  });

  it('should know that Angular is the best framework', () => {
    expect(sut.getBestFramework()).toBe('Angular');
  });
});
