import axios from "axios";
import colorMatcher from "~/utils/colorMatcher";
import parseParams from "~/utils/parseParams";
require("dotenv").config();

export const state = () => ({
  now_playing: null,
  upcoming: null,
  popular: null,
  top_rated: null,
  current: null,
  loading: false,
  searched: null,
  reviews: null,

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
  },
  getReviews: state => {
    return state.reviews;
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
  },

  SET_REVIEWS(state, reviews) {
    state.reviews = reviews;
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
      id = parseParams(id);

      if (state.current != null && state.current.id == id) {
        console.log("Same");

        await commit("SET_CURRENT", state.current);
      } else {
        let tmdb = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY_V3}&append_to_response=videos,images,credits,reviews,similar,recommendations,keywords, external_ids`
        );
        // !Remove this to avoid request limit
        let imdb = await axios.get(`http://www.omdbapi.com/?i=${tmdb.data.imdb_id}&plot=full
        &apikey=${process.env.OMDB_API_KEY}`);

        // For social ids
        let external_id = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/external_ids?api_key=${process.env.TMDB_API_KEY_V3}`
        );

        const { Metascore, imdbVotes, imdbRating, Rated } = imdb.data;

        tmdb.data.meta_score = Metascore;
        tmdb.data.imdb_rating = imdbRating;
        tmdb.data.imdb_votes = imdbVotes;
        tmdb.data.rated = Rated;
        tmdb.data.external_id = external_id.data;
        console.log(imdb.data);
        console.log(tmdb);

        let color = await colorMatcher(tmdb.data.backdrop_path);
        tmdb.data.color = color;
        console.log(state);
        commit("SET_CURRENT", tmdb.data);
      }
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

  async fetchReviews({ commit }, { id, page }) {
    try {
      id = parseParams(id);
      console.log(id, page);
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.TMDB_API_KEY_V3}&language=en-US&page=${page}`
      );

      commit("SET_REVIEWS", res.data);
    } catch (err) {
      console.error(err);
    }
  }
};
