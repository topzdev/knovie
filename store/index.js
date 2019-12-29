import axios from "axios";
require("dotenv").config();

export const state = () => ({
  genres: null,
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
  getGenres: state => {
    return state.genres;
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
  SET_GENRES(state, genres) {
    genres.unshift({ id: -1, name: "All" });
    state.genres = genres;
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
    return axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_API_KEY_V3}`
      )
      .then(res => {
        commit("SET_GENRES", res.data.genres);
      })
      .catch(err => console.error(err));
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
