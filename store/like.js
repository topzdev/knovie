import {
  addStorage,
  removeStorage,
  updateStorage,
  getStorage
} from "@/utils/tempStorage";

const viewedStorage = "knovie-viewed";
const likeStorage = "knovie-likes";

export const state = () => ({
  liked: getStorage(viewedStorage),
  current: null,
  viewed: getStorage(likeStorage)
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
  ADD_LIKES(state, { type, id }) {
    let likes = getStorage(likeStorage);

    if (likes.some(like => like.id === id)) {
      removeStorage(id, likeStorage);
    } else {
      addStorage({ type, id, date: Date.now() }, likeStorage);
    }

    state.liked = getStorage(likeStorage);
  },
  ADD_VIEWED(state, movie) {
    let views = getStorage(viewedStorage);

    if (views.some(view => view.id === id)) {
      return removeStorage(id, viewedStorage);
    }
    addStorage(movie, viewedStorage);

    state.viewed = getStorage(viewedStorage);
  },
  SHOW_LIKED(state, { type, id }) {
    state.current = views.find(view => view.id === id) ? true : false;
  }
};

export const actions = {
  likeMovie({ commit }, { type, id }) {
    commit("ADD_LIKES", { type, id });
  },

  viewedMovie({ commit }, movie) {
    commit("ADD_VIEWED", movie);
  }
};
