import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

export const getMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=2`
    )
      .then(res => res.json())
      .then(json => json.results);
  };
  
  export const getMovie = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then(res => res.json());
  };
  
  export const getGenres = () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    )
      .then(res => res.json())
      .then(json => json.genres);
  };
  export const getMovieReviews = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getUpcomingMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getPopularMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=3`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

 
  export const getCastCredits = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    )
      .then(res => res.json())
      .then(json => json.cast);
  };

  export const getCreditsCrew = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    )
      .then(res => res.json())
      .then(json => json.crew);
  };

  export const getNow_Playing = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getTranslations = () => {
    return fetch(
  `https://api.themoviedb.org/3/movie/{movie_id}/translations?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
    .then(res => res.json())
      .then(json => json.results);
  };

  export const getLatestMovie = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  