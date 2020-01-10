<template>
  <div class="card--episode">
    <div class="card--episode__poster">
      <nuxt-link to="/">
        <img
          :src="imagePath(episode.still_path, 'w300')"
          :alt="`${episode.name} poster`"
          class="fit-image"
          draggable="false"
        />
      </nuxt-link>
    </div>

    <div class="card--episode__description">
      <nuxt-link :to="`season/${episode.season_number}`">
        <h1 class="card--episode__title" aria-label="season title">{{episode.name}}</h1>
      </nuxt-link>
      <p class="card--episode__episodes mb-2">{{dayjs(episode.air_date).format('MMMM D, YYYY')}}</p>

      <p v-show="overview_trucate" class="card--episode__overview">
        {{overview_trucate.text}}
        <button
          v-if="overview_trucate.length > official_lenght"
          class="btn btn--peek"
          @click="toggle_more = !toggle_more"
        >see {{ toggle_more ? "more" : "less" }}</button>
      </p>
    </div>
  </div>
</template>

<script>
import imagePath from "@/utils/imagePath";
import parseLink from "@/utils/parseLink";
import truncate from "cli-truncate";
import dayjs from "dayjs";
export default {
  props: ["episode", "title"],
  data() {
    return {
      toggle_more: true,
      official_lenght: 120
    };
  },
  methods: {
    imagePath,
    parseLink,
    dayjs
  },
  computed: {
    overview_trucate() {
      const { overview } = this.$props.episode;
      const { toggle_more, official_lenght } = this;
      console.log(overview);
      if (overview == null) return false;

      return {
        length: overview.length,
        text: truncate(
          overview,
          toggle_more ? official_lenght : overview.length
        )
      };
    }
  }
};
</script>

<style>
</style>