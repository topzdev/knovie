<template>
  <nuxt-link
    :to="'/movie/'+title"
    class="card--primary"
    style="--box-shadow: var(--primary-color)"
  >
    <div class="card--primary__img">
      <img src="../../assets/img/card-sample.jpg" alt />
    </div>

    <div class="card__actions">
      <button>
        <v-icon size="30">{{ icons.heart }}</v-icon>
      </button>
    </div>

    <div class="card--primary__body">
      <div class="badge badge--primary">{{rating}}</div>
      <h1 class="card--primary__title">{{title}}</h1>
      <div class="card--primary__genre">{{genre}}</div>
      <p class="card--primary__date">{{date}}</p>
    </div>
  </nuxt-link>
</template>

<script>
import { mdiHeartOutline, mdiHeart } from "@mdi/js";
export default {
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
