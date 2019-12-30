<template>
  <div>
    <Slider category="now_playing" :movies="now_playing" />
    <v-container class="pt-2 pb-5">
      <Showcase title="Upcoming Movies" :result="upcoming" type="Movies" />

      <Showcase title="Popular" :result="popular" type="Movies" />

      <Showcase title="Top Rated" :result="top_rated" type="Movies" />
    </v-container>
  </div>
</template>

<script>
import "animate.css";
import "normalize.css";
import Slider from "../components/includes/Slider";
import Showcase from "../components/layout/Showcase";

export default {
  components: {
    Slider,
    Showcase
  },
  async fetch({ store, data }) {
    await store.dispatch("movie/fetchCategory", "now_playing");
    await store.dispatch("movie/fetchCategory", "top_rated");
    await store.dispatch("movie/fetchCategory", "upcoming");
    await store.dispatch("movie/fetchCategory", "popular");
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
