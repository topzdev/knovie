<template>
  <div>
    <MovieSlider :watch="upcoming.results" />
    <div class="container pb-5">
      <Showcase title="Popular" :result="popular.results" type="Movies" url="/c/movie/popular" />

      <Showcase title="Upcoming" :result="upcoming.results" type="Movies" url="/c/movie/upcoming" />

      <div class="ads-box" style="height: 150px !important">
       <adsbygoogle/>
      </div>
      <Showcase
        title="Now Playing"
        :result="now_playing.results"
        type="Movies"
        url="/c/movie/now_playing"
      />

      <Showcase
        title="Top Rated"
        :result="top_rated.results"
        type="Movies"
        url="/c/movie/top_rated"
      />
      <div class="ads-box" style="height: 150px !important">
       <adsbygoogle />
      </div>
    </div>
  </div>
</template>

<script>
import MovieSlider from "../components/movie/MovieSlider";
import Showcase from "../components/layout/Showcase";
export default {
  head() {
    return {
      titleTemplate: "%s | Know more your movie",
      title: "Knowvie"
    };
  },
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
