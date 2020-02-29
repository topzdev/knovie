<template>
  <div class="card--season">
    <div class="card--season__poster">
      <nuxt-link :to="`season/${season.season_number}`">
        <img
          :src="imagePath(season.poster_path, 'w185')"
          :alt="`${title} ${season.name} poster`"
          class="fit-image"
          draggable="false"
        />
      </nuxt-link>
    </div>

    <div class="card--season__description">
      <nuxt-link :to="`season/${season.season_number}`">
        <h1 class="card--season__title" aria-label="season title">
          {{season.name}}
          <span>({{airedDate}})</span>
        </h1>
      </nuxt-link>
      <p class="card--season__episodes mb-2" v-text="airedSeason" />

      <p v-show="overview_trucate" class="card--season__overview">
        {{overview_trucate.text}}
        <button
          v-if="overview_trucate.length > official_lenght"
          class="btn btn--peek"
          @click="toggle_more = !toggle_more"
        >see {{toggleText }}</button>
      </p>
    </div>
  </div>
</template>

<script>
import imagePath from "@/utils/imagePath";
import truncate from "cli-truncate";
import dayjs from "dayjs";
export default {
  props: ["season", "title"],
  data() {
    return {
      toggle_more: true,
      official_lenght: 200
    };
  },
  methods: {
    imagePath,
    dayjs
  },
  computed: {
    overview_trucate() {
      const { overview } = this.$props.season;
      const { toggle_more, official_lenght } = this;
      if (overview == null) return false;

      return {
        length: overview.length,
        text: truncate(
          overview,
          toggle_more ? official_lenght : overview.length
        )
      };
    },
    airedDate() {
      return dayjs(this.season.air_date).format("YYYY");
    },
    airedSeason() {
      return `with ${this.season.episode_count} episodes premiered on ${dayjs(
        this.season.air_date
      ).format("MMMM D, YYYY")}`;
    },
    toggleText() {
      return this.toggle_more ? "more" : "less";
    }
  }
};
</script>

<style>
</style>