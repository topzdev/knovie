<template>
  <div
    class="previewer--secondary"
    :style="{
      '--primary': color.primaryColor, '--secondary': color.secondaryColor, '--text-color': color.textColor
  }"
  >
    <div class="previewer--secondary__cover">
      <img
        class="fit-image"
        :src="imagePath(movie.backdrop_path, 'w1280')"
        :alt="movie.title + ' official wallpaper'"
        draggable="false"
        aria-label="Movie Wallpaper"
      />
    </div>
    <v-container>
      <div class="previewer--secondary__content">
        <div
          class="previewer--secondary__poster backdrop-gradient"
          :style="
            `--first: rgb(${color.primaryColor}); --second: rgb(${color.secondaryColor})`
          "
        >
          <img
            class="fit-image"
            :src="imagePath(movie.poster_path, 'w342')"
            :title="movie.title"
            :alt="movie.title + ' poster'"
            draggable="false"
            aria-label="Movie Poster"
          />
        </div>

        <div class="previewer--secondary__body">
          <h1 class="previewer--secondary__title" aria-label="Movie title">{{ movie.title }}</h1>
          <p
            class="previewer--secondary__year"
            aria-label="Movie released year"
            :title="moment(movie.release_date).format('MMMM Do YYYY')"
          >({{moment(movie.release_date).format('YYYY')}})</p>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import imagePath from "@/utils/imagePath";
import moment from "moment";
export default {
  props: ["movie", "color"],
  methods: {
    imagePath,
    moment
  }
};
</script>

<style>
</style>