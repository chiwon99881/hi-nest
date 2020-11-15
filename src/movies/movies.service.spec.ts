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

  describe("deleteMovie", () => {
    it("should be delete movie", () => {
      service.create({
        title: "Unit Test movie",
        year: 2020,
        genres: ["action"]
      })
      const beforeDeleteMovie = service.getAll().length
      service.deleteMovie(1)
      const afterDeleteMovie = service.getAll().length
      expect(afterDeleteMovie).toBeLessThan(beforeDeleteMovie)
    })
  })

  describe("create", () => {
    it("should be create a movie", () => {
      const beforeCreateMovie = service.getAll().length
      service.create({
        title: "Unit Test movie",
        year: 2020,
        genres: ["action"]
      })
      const afterCreateMovie = service.getAll().length
      expect(afterCreateMovie).toBeGreaterThan(beforeCreateMovie)
    })
  })

  describe("updateMovie", () => {
    it("should be updated movie", () => {
      service.create({
        title: "Unit Test movie",
        year: 2020,
        genres: ["action"]
      })
      service.updateMovie(1, {title: "Update Title"})
      const updatedMovie = service.getOne(1)
      expect(updatedMovie.title).toEqual("Update Title")
    })
  })


});
