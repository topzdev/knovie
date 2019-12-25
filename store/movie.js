import axios from "axios";
import imagePath from "../utils/imagePath";
import moment from "moment";
import pallete from "image-palette";
import pixels from "image-pixels";
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
  }
};

const setDataDependencies = results => {
  if (!Array.isArray(results)) {
    results = [results];
  }
  return results.map(data => {
    data.backdrop_path = imagePath(data.backdrop_path, "w1280");
    data.poster_path = imagePath(data.poster_path, "w342");
    data.year = moment(data.release_date).format("YYYY");

    return data;
  });
};

export const actions = {
  fetchCategory({ commit, state }, category) {
    if (!Array.isArray(category)) {
      category = [category];
    }
    category.forEach(async data => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${data}?api_key=${process.env.TMDB_API_KEY_V3}&language=${state.language}&page=1`
        );

        commit("SET_CATEGORIES", {
          movies: setDataDependencies(res.data.results),
          category: data
        });
      } catch (err) {
        console.error(err);
      }
    });
  },

  async fetchMovie({ commit, state }, id) {
    try {
      let tmdb = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY_V3}&append_to_response=videos,images,credits`
      );

      let imdb = await axios.get(`http://www.omdbapi.com/?i=${tmdb.data.imdb_id}&plot=full
      &apikey=${process.env.OMDB_API_KEY}`);

      const { Metascore, imdbVotes, imdbRating } = imdb.data;

      tmdb.data.meta_score = Metascore;
      tmdb.data.imdb_rating = imdbRating;
      tmdb.data.imdb_votes = imdbVotes;

      console.log(imdb.data, tmdb.data);
      commit("SET_CURRENT", setDataDependencies(tmdb.data)[0]);
    } catch (err) {
      console.error(err);
    }
  }
};
