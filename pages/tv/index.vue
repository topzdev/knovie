<template>
  <div>
    <TVSlider :tv_show="popular.results" />
    <div class="container pt-2 pb-5">
      <Showcase title="Popular" :result="popular.results" type="TV Shows" url="/c/tv/popular" />

      <Showcase
        title="Airing Today"
        :result="airing_today.results"
        type="TV Shows"
        url="/c/tv/airing_today"
      />

      <Showcase
        title="On The Air"
        :result="on_the_air.results"
        type="TV Shows"
        url="/c/tv/on_the_air"
      />

      <Showcase
        title="Top Rated"
        :result="top_rated.results"
        type="TV Shows"
        url="/c/tv/top_rated"
      />
    </div>
  </div>
</template>

<script>
import TVSlider from "@/components/tv/TVSlider";
import Showcase from "@/components/layout/Showcase";

export default {
  components: {
    TVSlider,
    Showcase
  },
  async fetch({ store, data }) {
    await store.dispatch("tv/fetchCategory", { category: "airing_today" });
    await store.dispatch("tv/fetchCategory", { category: "top_rated" });
    await store.dispatch("tv/fetchCategory", { category: "on_the_air" });
    await store.dispatch("tv/fetchCategory", { category: "popular" });
  },
  computed: {
    airing_today() {
      return this.$store.getters["tv/getCategories"]("airing_today");
    },
    top_rated() {
      return this.$store.getters["tv/getCategories"]("top_rated");
    },
    on_the_air() {
      return this.$store.getters["tv/getCategories"]("on_the_air");
    },
    popular() {
      return this.$store.getters["tv/getCategories"]("popular");
    },
    loading() {
      return this.$store.getters["tv/getLoading"];
    }
  }
};
</script>
