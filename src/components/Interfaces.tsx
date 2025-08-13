  export interface Movie {
    id: number;
    imageUrl: string;
    movieName: string;
    releaseYear: number;
    genres: string[];
    rating: number;
    duration: number;
    description: string;
  }

  export const movies: Movie[] =[
    { 
      id: 1,
      imageUrl: "imageUrl",
      movieName: "Inception",
      releaseYear: 2010,
      genres: ['Sci-Fi', 'Thriller'],
      rating: 5,
      duration: 1,
      description: "asd"
    },
    { 
      id: 2,
      imageUrl: "imageUrl",
      movieName: "Inception2",
      releaseYear: 2011,
      genres: ['Sci-Fi', 'Thriller'],
      rating: 5,
      duration: 1,
      description: "asd"
    }
  ]

  export const genres: string[] = [
    'All', 'Documentary', 'Comedy', 'Horror', 'Crime'
  ]