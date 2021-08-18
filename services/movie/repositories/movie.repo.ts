import { CreateMovieInput, Movie, UpdateMovieInput } from 'generated/types'
import { v4 as uuid } from 'uuid'

export class MovieRepository {
  private movies = [
    { id: uuid(), title: 'Lion King' },
    {
      id: uuid(),
      title: 'Spider Man: Far From Home',
      description: 'Next one is probably homeless?',
    },
  ] as Movie[]

  findMany(): Movie[] {
    return this.movies
  }

  findById(id: string): Movie | null {
    return this.movies.find(m => m.id === id) ?? null
  }

  createMovie(input: CreateMovieInput): Movie {
    const movie = { id: uuid(), ...input } as Movie
    this.movies.push(movie)

    return movie
  }

  updateMovie(id: string, input: UpdateMovieInput): Movie | null {
    const idx = this.movies.findIndex(m => m.id === id)
    if (idx < 0) {
      return null
    }
    const newMovie = { ...this.movies[idx], ...input } as Movie
    this.movies[idx] = newMovie

    return newMovie
  }
}
