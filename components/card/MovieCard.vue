<template>
  <div class="card--primary">
    <div class="card--primary__img">
      <img
        v-lazy="imagePath(movie.poster_path, 'w154')"
        :alt="movie.title"
        draggable="false"
        onerror="this.style.display='none'"
      />
    </div>

    <div class="card__actions">
      <client-only>
        <CardHeartButton :data="movie" type="movie" />
      </client-only>
    </div>

    <div class="card--primary__body">
      <div class="badge badge--primary" v-text="movie.vote_average"></div>
      <h1 class="card--primary__title" v-text="textTruncate" />
      <div class="card--primary__genre" v-if="genres">
        <span
          v-for="genre in movie.genre_ids.slice(0, 2)"
          :key="genre"
        >{{ findProperties(genres, "id", genre).name }}</span>
      </div>
      <p class="card--primary__date" v-text="releaseDate" />
    </div>

    <nuxt-link class="card__link" :to="moviePath" />
  </div>
</template>

<script>
import { mdiHeartOutline, mdiHeart } from "@mdi/js";
import imagePath from "@/utils/imagePath";
import parseLink from "@/utils/parseLink";
import findProperties from "@/utils/findProperties";
import dayjs from "dayjs";
import cliTruncate from "cli-truncate";
import CardHeartButton from "@/components/button/CardHeartButton";
export default {
  props: ["movie"],
  computed: {
    genres() {
      return this.$store.getters["getMovieGenres"];
    },
    releaseDate() {
      return dayjs(this.movie.release_date).format("YYYY");
    },
    textTruncate() {
      return cliTruncate(this.movie.title, 40, { position: "end" });
    },
    moviePath() {
      return {
        name: "view-movie-id",
        params: { id: parseLink(this.movie.title, this.movie.id, true) }
      };
    }
  },
  components: {
    CardHeartButton
  },
  methods: {
    imagePath,
    findProperties
  }
};
</script>

<style></style>
