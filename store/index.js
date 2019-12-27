import axios from "axios";
require("dotenv").config();

export const state = () => ({
  genres: null
});

export const getters = {
  getGenres: state => {
    return state.genres;
  }
};

export const mutations = {
  SET_GENRES(state, genres) {
    state.genres = genres;
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
  }
};
