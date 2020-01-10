<template>
  <div
    class="tv-show__seasons mb-3 mt-5"
    :style="  
      `--background-color: ${color.primaryColor};
          --text-color: ${color.textColor}`"
  >
    <img
      :src="imagePath(current_season.poster_path, 'w342')"
      alt
      class="fit-image tv-show__seasons-cover"
    />
    <div class="container py-0">
      <div class="tv-show__seasons-header">
        <nuxt-link :to="`${url}/${current_season.season_number}`">
          <div
            class="previewer--primary__poster backdrop-gradient"
            :style="
            `--first: rgb(${color.primaryColor}); --second: rgb(${color.secondaryColor})`
          "
          >
            <img
              v-if="current_season.poster_path"
              class="fit-image"
              :src="imagePath(current_season.poster_path, 'w342')"
              :alt="current_season.season_number + ' poster'"
              draggable="false"
              aria-label="Movie Poster"
            />
          </div>
        </nuxt-link>

        <div class="tv-show__seasons-description">
          <p class="tv-show__season-overview">Currently at</p>
          <h1 class="tv-show__seasons-title" v-text="current_season.name" />
          <p
            class="tv-show__seasons-year"
          >{{dayjs(current_season.air_date).format('YYYY')}}|{{current_season.episode_count}} Episodes</p>

          <p class="tv-show__season-overview" v-text="current_season.overview" />

          <nuxt-link
            :to="url"
            class="btn btn--primary mt-2"
            :style="`background-color:rgb(${color.primaryColor});
            border-color: rgb(${color.primaryColor});
            color: rgba(${color.textColor})`
            "
          >View All Seasons</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imagePath from "@/utils/imagePath";
import parseLink from "@/utils/parseLink";
import dayjs from "dayjs";
import colorMatcher from "@/utils/colorMatcher";

export default {
  props: ["tv_season", "color", "url"],
  methods: {
    imagePath,
    dayjs,
    parseLink
  },
  computed: {
    current_season() {
      const { tv_season } = this.$props;
      let last_season = tv_season[tv_season.length - 1];
      return last_season;
    }
  }
};
</script>

<style>
</style>