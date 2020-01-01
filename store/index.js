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
  sort_tv_by: [
    { name: "Popularity Desc", id: "popularity.desc" },
    { name: "Popularity Asc", id: "popularity.asc" },
    { name: "First Air Date Desc", id: "first_air_date.desc" },
    { name: "First Air Date Asc", id: "first_air_date.asc" },
    { name: "Vote Average Desc", id: "vote_average.desc" },
    { name: "Vote Average Asc", id: "vote_average.asc" }
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
  getSortMovieBy: state => {
    return state.sort_by;
  },
  getSortTVBy: state => {
    return state.sort_tv_by;
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
    await axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_API_KEY_V3}`
      )
      .then(res => {
        commit("SET_MOVIE_GENRES", res.data.genres);
      });

    await axios
      .get(
        `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.TMDB_API_KEY_V3}`
      )
      .then(res => {
        commit("SET_TV_GENRES", res.data.genres);
      });
  },
  async fetchRecommend(
    { commit },
    { year_value, sort_value, genre_value, page, type }
  ) {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/discover/${type}?api_key=${
          process.env.TMDB_API_KEY_V3
        }&language=en-US&sort_by=${sort_value}${
          genre_value != -1 ? "&with_genres=" + genre_value : ""
        }&include_adult=false&include_video=false&page=${page}&year=${year_value}`
      );
      res.data.type = type;
      console.log(res);
      commit("SET_RECOMMENDED", res.data);
    } catch (err) {
      console.error(err);
    }
  }
};
