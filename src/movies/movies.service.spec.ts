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

  describe("getAll", () => {
    
    it("should be return an array", () => {
        const result = service.getAll();

        expect(result).toBeInstanceOf(Array);
    })
  })

  describe("getOne", () => {
    it("should be a movie", () => {
      service.create({
        title: "Unit Test movie",
        year: 2020,
        genres: ["action"]
      })
      const movie = service.getOne(1)
      expect(movie).toBeDefined()
    })
  })


});
