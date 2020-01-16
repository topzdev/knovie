import {
  addStorage,
  removeStorage,
  updateStorage,
  getStorage
} from "@/utils/tempStorage";

const site_name = process.env.SITE_NAME;

const viewedStorage = site_name + "-viewed";
const likeStorage = site_name + "-likes";

export const state = () => ({
  liked: [],
  current: null,
  viewed: []
});

export const getters = {
  getLikes: state => {
    return state.current;
  },
  getAllLiked: state => {
    return state.liked;
  },
  getViewed: state => {
    return state.viewed;
  }
};

export const mutations = {
  ADD_LIKES(state, { type, data }) {
    let likes = getStorage(likeStorage);
    const {
      id,
      poster_path,
      title,
      name,
      vote_average,
      genre_ids,
      genres
    } = data;

    console.log(genre_ids, genres);

    if (likes.some(like => like.id === id)) {
      removeStorage(id, likeStorage);
    } else {
      addStorage(
        {
          type,
          id,
          date: Date.now(),
          poster_path,
          title,
          name,
          vote_average,
          genre_ids:
            genre_ids != undefined ? genre_ids : genres.map(genre => genre.id)
        },
        likeStorage
      );
    }
    state.liked = getStorage(likeStorage);
  },
  ADD_VIEWED(state, movie) {
    let views = [];
    if (views.some(view => view.id === id)) {
      return removeStorage(id, viewedStorage);
    }
    addStorage(movie, viewedStorage);
    state.viewed = [];
  },
  SHOW_LIKED(state, { type, id }) {
    state.current = views.find(view => view.id === id) ? true : false;
  },
  SET_LIKE(state, list) {
    state.liked = list;
  }
};

export const actions = {
  fetchStorage({ commit }) {
    commit("SET_LIKE", getStorage(likeStorage));
  },
  likeMovie({ commit }, { type, data }) {
    commit("ADD_LIKES", { type, data });
  },
  viewedMovie({ commit }, movie) {
    commit("ADD_VIEWED", movie);
  }
};
