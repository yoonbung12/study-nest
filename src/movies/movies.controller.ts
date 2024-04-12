import { Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'THis will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie id: ${movieId}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `Thist will delete a movie ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `Thist will delete a movie ${movieId}`;
  }
}
