<template>
  <div>
    <Slider category="now_playing" />
    <v-container class="py-5">
      <Showcase title="Upcoming Movies" :movies="upcoming" />

      <Showcase title="Popular" :movies="popular" />

      <Showcase title="Top Rated" :movies="top_rated" />
    </v-container>
  </div>
</template>

<script>
import "normalize.css";
import Slider from "../components/includes/Slider";
import Showcase from "../components/layout/Showcase";

export default {
  components: {
    Slider,
    Showcase
  },
  created() {
    this.$store.dispatch("movie/fetchCategory", [
      "popular",
      "upcoming",
      "top_rated"
    ]);
  },

  computed: {
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
