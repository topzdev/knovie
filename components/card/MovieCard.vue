<template>
  <nuxt-link
    :to="'/movie/' + movie.id"
    class="card--primary"
    style="--box-shadow: var(--primary-color)"
  >
    <div class="card--primary__img">
      <img :src="movie.poster_path" :alt="movie.title" draggable="false" />
    </div>

    <div class="card__actions">
      <button>
        <v-icon size="30">{{ icons.heart }}</v-icon>
      </button>
    </div>

    <div class="card--primary__body">
      <div class="badge badge--primary">{{ movie.vote_average }}</div>
      <h1 class="card--primary__title">{{ movie.title }}</h1>
      <div class="card--primary__genre">{{ genre }}</div>
      <p class="card--primary__date">{{ movie.year }}</p>
    </div>
  </nuxt-link>
</template>

<script>
import { mdiHeartOutline, mdiHeart } from "@mdi/js";
export default {
  props: ["movie"],
  data: () => {
    return {
      icons: {
        heart: mdiHeartOutline,
        heartFull: mdiHeart
      },
      title: "Joker",
      rating: 8.4,
      genre: "Action/Drama",
      date: 2019,
      img: ""
    };
  },

  methods: {
    onMouseEnter() {}
  }
};
</script>

<style></style>
