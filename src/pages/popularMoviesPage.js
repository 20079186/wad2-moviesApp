import React, { useContext } from "react";
import {MoviesContext} from "../contexts/moviesContext"
import MovieListPageTemplate from "../components/templateMovieListPage"
import TranslateButton from '../components/buttons/seeTranslations'

const PopularMoviesPage = () => {
  const context = useContext(MoviesContext)
  const movies = context.popular.filter((m) => {
    return !("popular" in m);
  });
      return (
        <MovieListPageTemplate
          title='Popular Movies'
          movies={movies}
          action={(movie) =>{
            return <TranslateButton movie={movie} />;
          }}
        />
    );
};

export default PopularMoviesPage;