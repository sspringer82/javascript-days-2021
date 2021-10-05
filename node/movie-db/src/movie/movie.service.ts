import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Movie } from './movie.entity';
import { InputMovie } from './movie.interface';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  getAllMovies(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  getOneMovie(id: number): Promise<Movie> {
    return this.movieRepository.findOne(id);
  }

  createNewMovie(movie: InputMovie): Promise<Movie> {
    return this.movieRepository.save(movie);
  }

  udpateMovie(id: number, movie: Movie): Promise<Movie> {
    return this.movieRepository.save(movie);
  }

  removeMovie(id: number): Promise<DeleteResult> {
    return this.movieRepository.delete(id);
  }
}
