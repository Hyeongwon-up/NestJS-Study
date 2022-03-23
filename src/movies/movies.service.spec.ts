import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe("getAll(),", () => {

    it("배열타입을 반환 해야함", () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array)
    })

  })

  describe("getOne()", () => {

    it("should return a movie", () => {
      service.create({
        title: 'TestMovie',
        genres: ['teest'],
        year: 2000,
      });
      const movie = service.getOne(1);
      expect(movie).toBeDefined();
    })

  })

  

});
