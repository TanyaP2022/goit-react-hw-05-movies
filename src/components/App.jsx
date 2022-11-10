import { Route, Routes } from "react-router-dom"
import { Cast } from './Cast/Cast';
import  Navigation  from './Navigation/Navigation';
import { lazy, Suspense } from "react";
import { Reviews } from './Reviews/Reviews';
import { NotFoundView } from './NotFoundView';


const MoviesDetalis = lazy(() => import('./MovieDetails/MovieDetails'));
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={''}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetalis />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </div>
  );
};
