<template>
  <div>
    <MovieSlider :movies="popular.results" />
    <div class="container pt-2 pb-5">
      <Showcase
        title="Popular"
        :result="popular.results"
        type="Movies"
        url="/movie/popular"
      />

      <Showcase
        title="Upcoming"
        :result="upcoming.results"
        type="Movies"
        url="/movie/upcoming"
      />

      <Showcase
        title="Now Playing"
        :result="now_playing.results"
        type="Movies"
        url="/movie/now_playing"
      />

      <Showcase
        title="Top Rated"
        :result="top_rated.results"
        type="Movies"
        url="/movie/top_rated"
      />
    </div>
  </div>
</template>

<script>
import "animate.css";
import MovieSlider from "../components/movie/MovieSlider";
import Showcase from "../components/layout/Showcase";

export default {
  components: {
    MovieSlider,
    Showcase
  },
  async fetch({ store, data }) {
    await store.dispatch("movie/fetchCategory", { category: "now_playing" });
    await store.dispatch("movie/fetchCategory", { category: "top_rated" });
    await store.dispatch("movie/fetchCategory", { category: "upcoming" });
    await store.dispatch("movie/fetchCategory", { category: "popular" });
  },
  computed: {
    now_playing() {
      return this.$store.getters["movie/getCategories"]("now_playing");
    },
    top_rated() {
      return this.$store.getters["movie/getCategories"]("top_rated");
    },
    upcoming() {
      return this.$store.getters["movie/getCategories"]("upcoming");
    },
    popular() {
      return this.$store.getters["movie/getCategories"]("popular");
    }
  }
};
</script>

<style lang="scss">
@import "./assets/sass/main.scss";
</style>
