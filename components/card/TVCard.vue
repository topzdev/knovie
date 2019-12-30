<template>
  <nuxt-link
    :to="{
      name: 'view-tv-id',
      params: { id: parseLink(tv.name, tv.id) }
    }"
    class="card--primary"
    style="--box-shadow: var(--primary-color)"
  >
    <div class="card--primary__img">
      <img
        v-lazy="imagePath(tv.poster_path, 'w185')"
        :alt="tv.name"
        draggable="false"
      />
    </div>

    <div class="card__actions">
      <button>
        <v-icon size="30">{{ icons.heart }}</v-icon>
      </button>
    </div>

    <div class="card--primary__body">
      <div class="badge badge--primary" v-text="tv.vote_average"></div>
      <h1
        class="card--primary__title"
        v-text="cliTruncate(tv.name, 40, { position: 'end' })"
      />
      <div class="card--primary__genre" v-if="genres">
        <span v-for="genre in tv.genre_ids.slice(0, 2)" :key="genre">
          {{ _.find(genres, { id: genre }) }}
        </span>
      </div>
      <p class="card--primary__date">
        {{ moment(tv.release_date).format("YYYY") }}
      </p>
    </div>
  </nuxt-link>
</template>

<script>
import { mdiHeartOutline, mdiHeart } from "@mdi/js";
import imagePath from "@/utils/imagePath";
import moment from "moment";
import cliTruncate from "cli-truncate";

export default {
  props: ["tv"],
  data() {
    return {
      icons: {
        heart: mdiHeartOutline,
        heartFull: mdiHeart
      }
    };
  },
  computed: {
    genres() {
      return this.$store.getters["getTVGenres"];
    }
  },
  methods: {
    cliTruncate,
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
