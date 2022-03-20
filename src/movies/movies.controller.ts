import { Controller, Delete, Get, Param, Patch, Post, Body, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get("/:id")
  getOne(@Param("id") id: String){
      return `This will return one Movie the id: ${id}`;
  }



}