import axios from "axios";
import colorMatcher from "~/utils/colorMatcher";
require("dotenv").config();

export const state = () => ({
  now_playing: null,
  upcoming: null,
  popular: null,
  top_rated: null,
  current: null,
  loading: false,
  searched: null,
  cast: null,
  reviews: null,
  media: null,
  language: "en-US"
});

export const getters = {
  getCategories: state => category => {
    return state[category];
  },
  getCurrent: state => {
    return state.current;
  },
  getLoading: state => {
    return state.loading;
  },
  getSearch: state => {
    return state.searched;
  }
};

export const mutations = {
  SET_CATEGORIES(state, { movies, category }) {
    state[category] = movies;
  },
  SET_CURRENT(state, movie) {
    state.current = movie;
  },

  SET_LOADING(state, status) {
    state.loading = status;
  },

  SET_SEARCH(state, movies) {
    state.searched = movies;
  }
};

export const actions = {
  async fetchCategory({ commit, state }, category) {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.TMDB_API_KEY_V3}&language=${state.language}&page=1&append_to_response=genre`
      );

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

      commit("SET_COLLECTION", res.data);
    } catch (err) {
      console.error(err);
    }
  },

  async fetchSearch({ commit }, { query, page }) {
    console.log(query, page);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY_V3}&language=en-US&query=${query}&page=${page}`
      );

      commit("SET_SEARCH", res.data);
    } catch (err) {
      console.log(err);
    }
  },

  setLoading({ commit }, status) {
    commit("SET_LOADING", status);
  },

  async fetchCast({ commit }, { credit_id, movie_info }) {}
};
