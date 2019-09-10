import { CentigradePipe } from './centigrade.pipe';

describe('CentigradePipe', () => {
  it('create an instance', () => {
    const pipe = new CentigradePipe();
    expect(pipe).toBeTruthy();
  });
});
