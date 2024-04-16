import { Controller, Delete, Get, Param, Post, Patch, Body, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'THis will return all movies';
  }

  @Get('search')
  search(@Query('year') searchingYear: string ) {
    return `we are searching movie with a title ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `Thist will delete a movie ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updateMovie: movieId,
      ...updateData
    };
  }

}
