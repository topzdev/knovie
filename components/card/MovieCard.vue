<template>
  <nuxt-link
    :to="{name: 'movie-id', params: {id: parseLink(movie.title, movie.id) }}"
    class="card--primary"
    style="--box-shadow: var(--primary-color)"
  >
    <div class="card--primary__img">
      <img :src="imagePath(movie.poster_path, 'w185')" :alt="movie.title" draggable="false" />
    </div>

    <div class="card__actions">
      <button>
        <v-icon size="30">{{ icons.heart }}</v-icon>
      </button>
    </div>

    <div class="card--primary__body">
      <div class="badge badge--primary">{{ movie.vote_average }}</div>
      <h1 class="card--primary__title">{{ movie.title }}</h1>
      <div class="card--primary__genre" v-if="genres">
        <span v-for="genre in movie.genre_ids.slice(0, 2)" :key="genre">
          {{
          _.find(genres, { id: genre }).name
          }}
        </span>
      </div>
      <p class="card--primary__date">{{ moment(movie.release_date).format("YYYY") }}</p>
    </div>
  </nuxt-link>
</template>

<script>
import { mdiHeartOutline, mdiHeart } from "@mdi/js";
import imagePath from "@/utils/imagePath";
import moment from "moment";

export default {
  props: ["movie"],
  data: () => {
    return {
      icons: {
        heart: mdiHeartOutline,
        heartFull: mdiHeart
      }
    };
  },
  computed: {
    genres() {
      return this.$store.getters["getGenres"];
    }
  },
  methods: {
    imagePath,
    moment,
    parseLink(title, id) {
      return `${title
        .replace(/[^a-zA-Z ]/g, "")
        .replace(/ /g, "-")
        .toLowerCase()}-${id}`;
    }
  }
};
</script>

<style></style>
