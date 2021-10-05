import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { Movie } from './movie.entity';
import { InputMovie } from './movie.interface';
import { MovieService } from './movie.service';

@ApiTags('movies')
@UseGuards(JwtAuthGuard)
@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @ApiOkResponse({ description: 'All available Movies' })
  @Get()
  getAllMovies(): Promise<Movie[]> {
    return this.movieService.getAllMovies();
  }

  @ApiOkResponse({ description: 'The movie matching the given id' })
  @Get(':id')
  getOneMovie(@Param('id') id: string): Promise<Movie> {
    return this.movieService.getOneMovie(parseInt(id, 10));
  }

  @ApiOkResponse({ description: 'The newly created movie' })
  @Post()
  createNewMovie(@Body() movie: InputMovie): Promise<Movie> {
    return this.movieService.createNewMovie(movie);
  }

  @ApiOkResponse({ description: 'The updated movie' })
  @Put(':id')
  udpateMovie(@Param('id') id: string, @Body() movie: Movie): Promise<Movie> {
    return this.movieService.udpateMovie(parseInt(id, 10), movie);
  }

  @ApiOkResponse({ description: 'Nothing' })
  @Delete(':id')
  @HttpCode(204)
  removeMovie(@Param('id') id: string): void {
    this.movieService.removeMovie(parseInt(id, 10));
  }
}
