import { Route, Routes } from 'react-router-dom';
import { Home } from 'Pages/Home/Home';
import { Movies } from 'Pages/Movies/Movies';
import { Navigation } from 'components/Navigation/Navigation';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} />
      <Route index element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:movieId" element={<MovieDetails />}>
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
export default App;
