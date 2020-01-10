<template>
  <div
    class="previewer--secondary"
    :style="{
      '--primary': color.primaryColor,
      '--secondary': color.secondaryColor,
      '--text-color': color.textColor
    }"
  >
    <div class="previewer--secondary__cover" v-if="tv_show.backdrop_path">
      <img
        class="fit-image"
        :src="imagePath(tv_show.backdrop_path, 'w1280')"
        :alt="tv_show.name + ' official wallpaper'"
        draggable="false"
        aria-label="TV Show Wallpaper"
      />
    </div>
    <div class="container">
      <div class="previewer--secondary__content">
        <div
          class="previewer--secondary__poster backdrop-gradient"
          :style="
            `--first: rgb(${color.primaryColor}); --second: rgb(${color.secondaryColor})`
          "
        >
          <img
            class="fit-image"
            :src="imagePath(tv_show.poster_path, 'w342')"
            :title="tv_show.name"
            :alt="tv_show.name + ' poster'"
            draggable="false"
            aria-label="TV Show Poster"
          />
        </div>

        <div class="previewer--secondary__body">
          <h1 class="previewer--secondary__title" aria-label="TV Show title">{{ tv_show.name }}</h1>
          <p
            v-if="tv_show.first_air_date"
            class="previewer--secondary__year"
            aria-label="TV Show released year"
            :title="dayjs(tv_show.first_air_date ).format('MMMM Do YYYY')"
          >({{ dayjs(tv_show.first_air_date).format("YYYY") }})</p>

          <p
            v-else
            class="previewer--secondary__year"
            aria-label="TV Show released year"
            :title="dayjs(tv_show.air_date ).format('MMMM Do YYYY')"
          >({{ dayjs(tv_show.air_date).format("YYYY") }})</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imagePath from "@/utils/imagePath";
import dayjs from "dayjs";
export default {
  props: ["tv_show", "color"],
  methods: {
    imagePath,
    dayjs
  }
};
</script>

<style></style>
