import { MovieEntity } from './movie.entity';

describe('MovieEntity', () => {
  it('should be defined', () => {
    expect(new MovieEntity()).toBeDefined();
  });
});
