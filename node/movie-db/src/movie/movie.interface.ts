export interface Movie {
  id: number;
  title: string;
  year: number;
}

export type InputMovie = Omit<Movie, 'id'>;
