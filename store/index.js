import axios from "axios";
require("dotenv").config();

export const state = () => ({
  movie_genres: null,
  tv_genres: null,
  sort_by: [
    { name: "Popularity Desc", id: "popularity.desc" },
    { name: "Popularity Asc", id: "popularity.asc" },
    { name: "Release Date Desc", id: "release_date.desc" },
    { name: "Release Date Asc", id: "release_date.asc" },
    { name: "Vote Desc", id: "vote.desc" },
    { name: "Vote Asc", id: "vote.asc" },
    { name: "Title(Z-A)", id: "original_title.desc" },
    { name: "Title(A-Z)", id: "original_title.asc" }
  ],
  recommend: null
});

export const getters = {
  getMovieGenres: state => {
    return state.movie_genres;
  },
  getTVGenres: state => {
    return state.tv_genres;
  },
  getSortBy: state => {
    return state.sort_by;
  },
  getRecommend: state => {
    return state.recommend;
  },
  getYears: () => {
    let years = ["All"];
    for (let i = new Date().getFullYear(); i > 1880; i--) {
      years.push(i);
    }
    return years;
  }
};

export const mutations = {
  SET_MOVIE_GENRES(state, genres) {
    genres.unshift({ id: -1, name: "All" });
    state.movie_genres = genres;
  },
  SET_TV_GENRES(state, genres) {
    genres.unshift({ id: -1, name: "All" });
    state.tv_genres = genres;
  },
  SET_RECOMMENDED(state, movies) {
    state.recommend = movies;
  },
  SET_YEARS(state, years) {
    state.years = years;
  }
};

export const actions = {
  async nuxtServerInit({ commit }, context) {
    try {
      const tv_genre = await axios.get(
        `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.TMDB_API_KEY_V3}`
      );
      commit("SET_TV_GENRES", tv_genre.data.genres);

      const movie_genre = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_API_KEY_V3}`
      );
      commit("SET_MOVIE_GENRES", movie_genre.data.genres);
    } catch (error) {
      console.log(error);
    }
  },
  async fetchRecommend(
    { commit },
    { year_value, sort_value, genre_value, page }
  ) {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          process.env.TMDB_API_KEY_V3
        }&language=en-US&sort_by=${sort_value}${
          genre_value != -1 ? "&with_genres=" + genre_value : ""
        }&include_adult=false&include_video=false&page=${page}&year=${year_value}`
      );
      console.log(res);
      commit("SET_RECOMMENDED", res.data);
    } catch (err) {
      console.error(err);
    }
  }
};
