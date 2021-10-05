import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Movie } from './movie/movie.entity';
import { MovieModule } from './movie/movie.module';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';

@Module({
  imports: [
    MovieModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'topSecret',
      database: 'Movie',
      entities: [Movie, User],
      synchronize: false,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
