<template>
  <div class="previewer--secondary" :style="movieColor">
    <div class="previewer--secondary__cover">
      <lazy-img
        class="fit-image"
        :path="movie.backdrop_path"
        size="w1280"
        :alt="movie.title + ' official wallpaper'"
        aria-label="Movie Wallpaper"
      />
    </div>
    <div class="container">
      <div class="previewer--secondary__content">
        <div class="previewer--secondary__poster backdrop-gradient" :style="gradientBackground">
          <lazy-img
            class="fit-image"
            :path="movie.poster_path"
            size="w342"
            :title="movie.title"
            :alt="movie.title + ' poster'"
            aria-label="Movie Poster"
          />
        </div>

        <div class="previewer--secondary__body">
          <h1 class="previewer--secondary__title" aria-label="Movie title" v-text="movie.title" />
          <p
            class="previewer--secondary__year"
            aria-label="Movie released year"
            :title="dateFormat('MMMM DD, YYYY')"
          >({{dateFormat('YYYY')}})</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imagePath from "@/utils/imagePath";
import dayjs from "dayjs";
export default {
  props: ["movie", "color"],
  methods: {
    imagePath
  },
  computed: {
    movieColor() {
      return {
        "--primary": this.color.primaryColor,
        "--secondary": this.color.secondaryColor,
        "--text-color": this.color.textColor
      };
    },
    gradientBackground() {
      return `--first: rgb(${this.color.primaryColor}); --second: rgb(${this.color.secondaryColor})`;
    }
  },
  methods: {
    dateFormat(format) {
      console.log(this.movie.release_date);
      return dayjs(this.movie.release_date).format(format);
    }
  }
};
</script>

<style>
</style>