<template>
  <div class="card--primary" style="--box-shadow: var(--primary-color)">
    <div class="card--primary__img">
      <img
        v-lazy="imagePath(tv_show.poster_path, 'w185')"
        :alt="tv_show.name"
        draggable="false"
      />
    </div>

    <div class="card__actions">
      <CardHeartButton :data="tv_show" type="tv" />
    </div>

    <div class="card--primary__body">
      <div class="badge badge--primary" v-text="tv_show.vote_average"></div>
      <h1
        class="card--primary__title"
        v-text="cliTruncate(tv_show.name, 40, { position: 'end' })"
      ></h1>

      <div class="card--primary__genre">
        <span
          v-for="genre in tv_show.genre_ids.slice(0, 2)"
          :key="genre"
          v-text="extractName(genre, genres)"
        />
      </div>
      <p
        class="card--primary__date"
        v-text="dayjs(tv_show.first_air_date).format('YYYY')"
      ></p>
    </div>
    <nuxt-link
      :to="{
        name: 'view-tv-id',
        params: { id: parseLink(tv_show.name, tv_show.id) }
      }"
    />
  </div>
</template>

<script>
import { mdiHeartOutline, mdiHeart } from "@mdi/js";
import imagePath from "@/utils/imagePath";
import parseLink from "@/utils/parseLink";
import { find } from "lodash/core";
import dayjs from "dayjs";
import CardHeartButton from "@/components/button/CardHeartButton";
import cliTruncate from "cli-truncate";

export default {
  props: ["tv_show"],
  data() {
    return {
      icons: {
        heart: mdiHeartOutline,
        heartFull: mdiHeart
      }
    };
  },
  components: { CardHeartButton },
  computed: {
    genres() {
      return this.$store.getters["getTVGenres"];
    }
  },
  methods: {
    cliTruncate,
    imagePath,
    dayjs,
    parseLink,
    extractName(value, genres) {
      const val = find(genres, { id: value });
      if (val === undefined) return "";
      return val.name;
    }
  }
};
</script>

<style></style>
