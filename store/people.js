import axios from "axios";
import colorMatcher from "@/utils/colorMatcher";
import parseParams from "@/utils/parseParams";
import moment from "moment";
import _ from "lodash";
require("dotenv").config();

export const state = () => ({
  people: null,
  search: null
});

export const getters = {
  getPeople(state) {
    return state.people;
  },
  getSearch(state) {
    return state.search;
  }
};

export const mutations = {
  SET_PEOPLE(state, people) {
    state.people = people;
  },
  SET_SEARCH: function(state, people) {
    state.search = people;
  }
};

export const actions = {
  async fetchPeople({ commit }, id) {
    try {
      id = parseParams(id);

      const res = await axios.get(
        `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.TMDB_API_KEY_V3}&append_to_response=images,movie_credits,combined_credits,tv_credits,external_ids,tagged_images`
      );
      console.log(res.data);
      res.data.movie_credits.cast = sortArrayByDate(
        res.data.movie_credits.cast
      );
      res.data.movie_credits.crew = sortArrayByDate(
        res.data.movie_credits.crew
      );
      res.data.tv_credits.crew = sortArrayByDate(res.data.tv_credits.crew);
      res.data.tv_credits.cast = sortArrayByDate(res.data.tv_credits.cast);
      commit("SET_PEOPLE", res.data);
    } catch (err) {
      console.log(err);
    }
  },

  async fetchSearch({ commit }, { query, page }) {
    console.log(query, page);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/person?api_key=${process.env.TMDB_API_KEY_V3}&language=en-US&query=${query}&page=${page}`
      );
      console.log(res.data);
      commit("SET_SEARCH", res.data);
    } catch (err) {
      console.log(err);
    }
  }
};

const sortArrayByDate = toSort => {
  if (toSort.length <= 0) {
    return [];
  }

  return toSort
    .sort(function compare(a, b) {
      var dateA = new Date(a.release_date ? a.release_date : a.first_air_date);
      var dateB = new Date(b.release_date ? b.release_date : b.first_air_date);
      return dateA - dateB;
    })
    .slice()
    .reverse();
};
