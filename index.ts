import { createMovieService } from './services/movie'

async function bootstrap() {
  await Promise.all([createMovieService()])
}

bootstrap()
