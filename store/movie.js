import axios from "axios";
import colorMatcher from "~/utils/colorMatcher";
require("dotenv").config();

export const state = () => ({
  now_playing: null,
  upcoming: null,
  popular: null,
  top_rated: null,
  current: null,
  language: "en-US"
});

export const getters = {
  getCategories: state => category => {
    return state[category];
  },
  getCurrent: state => {
    return state.current;
  }
};

export const mutations = {
  SET_CATEGORIES(state, { movies, category }) {
    state[category] = movies;
  },
  SET_CURRENT(state, movie) {
    state.current = movie;
  },

  SET_COLLECTION(state, collection) {}
};

export const actions = {
  async fetchCategory({ commit, state }, category) {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.TMDB_API_KEY_V3}&language=${state.language}&page=1&append_to_response=genre`
      );
      console.log(res.data.results);
      commit("SET_CATEGORIES", {
        movies: res.data.results,
        category
      });
    } catch (err) {
      console.error(err);
    }
  },

  async fetchMovie({ commit, state }, id) {
    try {
      let tmdb = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY_V3}&append_to_response=videos,images,credits,reviews,similar,recommendations`
      );
      // !Remove this to avoid request limit
      let imdb = await axios.get(`http://www.omdbapi.com/?i=${tmdb.data.imdb_id}&plot=full
      &apikey=${process.env.OMDB_API_KEY}`);

      const { Metascore, imdbVotes, imdbRating } = imdb.data;

      tmdb.data.meta_score = Metascore;
      tmdb.data.imdb_rating = imdbRating;
      tmdb.data.imdb_votes = imdbVotes;

      let color = await colorMatcher(tmdb.data.backdrop_path);
      tmdb.data.color = color;

      console.log(imdb.data, tmdb.data);
      commit("SET_CURRENT", tmdb.data);
    } catch (err) {
      console.error(err);
    }
  },

  async fetchCollection({ commit }, collection_id) {
    try {
      let res = await axios.get(
        `https://api.themoviedb.org/3/collection/${collection_id}?api_key=${process.env.TMDB_API_KEY_V3}&language=en-US`
      );

      console.log(res.data);
      commit("SET_COLLECTION", res.data);
    } catch (err) {
      console.error(err);
    }
  }
};
