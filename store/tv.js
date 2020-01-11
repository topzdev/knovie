import axios from "axios";
import colorMatcher from "~/utils/colorMatcher";
import parseParams from "~/utils/parseParams";
require("dotenv").config();

export const state = () => ({
  popular: null,
  top_rated: null,
  latest: null,
  airing_today: null,
  on_the_air: null,
  current: null,
  search: null,
  reviews: null,
  season: null,
  language: "en-US"
});

export const getters = {
  getCategories: state => category => {
    return state[category];
  },
  getCurrent: state => {
    return state.current;
  },
  getReviews: state => {
    return state.reviews;
  },
  getSearch: state => {
    return state.search;
  },
  getSeason: state => {
    return state.season;
  }
};

export const mutations = {
  SET_CATEGORIES(state, { tv_results, category }) {
    state[category] = tv_results;
  },
  SET_CURRENT(state, movie) {
    state.current = movie;
  },
  SET_REVIEWS(state, reviews) {
    state.reviews = reviews;
  },
  SET_SEARCH(state, movies) {
    state.search = movies;
  },
  SET_SEASON(state, season) {
    state.season = season;
  }
};

export const actions = {
  async fetchCategory({ commit, state }, { category, page }) {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/tv/${category}?api_key=${
          process.env.TMDB_API_KEY_V3
        }&language=${state.language}&page=${
          page ? page : 1
        }&append_to_response=genre`
      );

      commit("SET_CATEGORIES", {
        tv_results: res.data,
        category
      });
    } catch (err) {
      console.error(err);
    }
  },
  async fetchSearch({ commit }, { query, page }) {
    console.log(query, page);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=${process.env.TMDB_API_KEY_V3}&language=en-US&query=${query}&page=${page}`
      );

      commit("SET_SEARCH", res.data);
    } catch (err) {
      console.log(err);
    }
  },
  async fetchTVShow({ commit, state }, id) {
    try {
      id = parseParams(id);

      if (state.current != null && state.current.id == id) {
        console.log("Same");

        await commit("SET_CURRENT", state.current);
      } else {
        let tmdb = await axios.get(
          `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.TMDB_API_KEY_V3}&append_to_response=videos,images,credits,reviews,similar,recommendations,keywords, external_ids`
        );

        // For social ids
        let external_id = await axios.get(
          `https://api.themoviedb.org/3/tv/${id}/external_ids?api_key=${process.env.TMDB_API_KEY_V3}`
        );

        tmdb.data.external_id = external_id.data;
        let color = await colorMatcher(tmdb.data.backdrop_path);
        tmdb.data.color = color;
        console.log(state);
        commit("SET_CURRENT", tmdb.data);
      }
    } catch (err) {
      console.error(err);
    }
  },
  async fetchReviews({ commit }, { id, page }) {
    try {
      id = parseParams(id);
      console.log(id, page);
      const res = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${process.env.TMDB_API_KEY_V3}&language=en-US&page=${page}`
      );

      commit("SET_REVIEWS", res.data);
    } catch (err) {
      console.error(err);
    }
  },
  async fetchSeason({ commit }, { id, season_id }) {
    try {
      id = parseParams(id);
      const res = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}/season/${season_id}?api_key=${process.env.TMDB_API_KEY_V3}&append_to_response=credits,images&language=en-US`
      );
      console.log(res.data);
      res.data.color = await colorMatcher(res.data.poster_path);

      commit("SET_SEASON", res.data);
    } catch (err) {
      console.error(err);
    }
  }
};
