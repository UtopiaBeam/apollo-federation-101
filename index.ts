import { createReviewService } from './services/reviews'
import { createMovieService } from './services/movie'

async function bootstrap() {
  await Promise.all([createMovieService(), createReviewService()])
}

bootstrap()
