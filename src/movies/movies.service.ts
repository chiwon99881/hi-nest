import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entitiy';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const getMovie = this.movies.find((movie) => movie.id === id);
    if (!getMovie) {
      throw new NotFoundException(`Doesn't have this movie with ID ${id}`);
    }
    return getMovie;
  }

  deleteMovie(id: number): boolean {
    this.movies = this.movies.filter((movie) => movie.id !== id);
    return true;
  }

  create(movieData: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  updateMovie(id: number, updateData: UpdateMovieDto) {
    const movie = this.movies.find((movie) => movie.id === id);
    this.deleteMovie(id);
    this.movies.push({
      ...movie,
      ...updateData,
    });
  }
}
