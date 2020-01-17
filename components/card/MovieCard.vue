<template>
  <div class="card--primary" style="--box-shadow: var(--primary-color)">
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
      <h1 class="card--primary__title" v-text="cliTruncate(movie.title, 40, { position: 'end' })" />
      <div class="card--primary__genre" v-if="genres">
        <span v-for="genre in movie.genre_ids.slice(0, 2)" :key="genre">
          {{
          findProperties(genres, "id", genre).name
          }}
        </span>
      </div>
      <p class="card--primary__date">{{ dayjs(movie.release_date).format("YYYY") }}</p>
    </div>

    <nuxt-link
      class="card__link"
      :to="{
        name: 'view-movie-id',
        params: { id: parseLink(movie.title, movie.id) }
      }"
    />
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
    }
  },
  components: {
    CardHeartButton
  },
  methods: {
    cliTruncate,
    imagePath,
    dayjs,
    parseLink,
    findProperties
  }
};
</script>

<style></style>
