import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entitiy';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

     constructor(private readonly moviesService: MoviesService) {}

    @Get() 
    getAll(): Movie[] {
        return this.moviesService.getAll()
    }

    @Get("/:id")
    getOne(@Param("id") id:string): Movie {
        return this.moviesService.getOne(id)
    }

    @Post()
    create(@Body() movieData) {
        return this.moviesService.create(movieData)
    }

    @Delete("/:id")
    deleteMovie(@Param("id") movieId: string) {
        return this.moviesService.deleteMovie(movieId)
    }

    @Patch("/:id")
    updateMovie(@Param("id") movieId: string, @Body() updateData) {
        return {
            updateMovie: movieId,
            ...updateData,
        }
    }

}
