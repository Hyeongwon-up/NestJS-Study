import { Controller, Delete, Get, Param, Patch, Post, Body, Query } from '@nestjs/common';
import { builtinModules } from 'module';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesServie: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesServie.getAll();
  }

  @Get("/:id")
  getOne(@Param("id") id: string): Movie{
    return this.moviesServie.getOne(id)
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesServie.create(movieData);
  }



}