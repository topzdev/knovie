import axios from "axios";
import colorMatcher from "@/utils/colorMatcher";
import parseParams from "@/utils/parseParams";
require("dotenv").config();

export const state = () => ({
  people: null,
  search: null
});

export const getters = {
  getPeople: function(state) {
    return state.people;
  }
};

export const mutation = {
  SET_PEOPLE: function(state, people) {
    return (state.people = people);
  },
  SET_SEARCH: function(state, people) {
    return (state.search = search);
  }
};

export const actions = {
  fetchPeople: async function({ commit }, id) {
    try {
      id = parseParams(id);

      const res = axios.get(
        `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.TMDB_API_KEY_V3}&language=en-US`
      );

      commit("SET_PEOPLE", res.data);
    } catch (err) {
      console.log(err);
    }
  }
};
