<template>
  <div>
    <Slider :movies="airing_today" />
    <v-container class="pt-2 pb-5">
      <Showcase title="Popular TV Shows" :result="popular" type="TV Shows" />

      <Showcase
        title="On The Air TV Shows"
        :result="on_the_air"
        type="TV Shows"
      />

      <Showcase
        title="Top Rated TV Shows"
        :result="top_rated"
        type="TV Shows"
      />
    </v-container>
  </div>
</template>

<script>
import Slider from "@/components/includes/Slider";
import Showcase from "@/components/layout/Showcase";

export default {
  components: {
    Slider,
    Showcase
  },
  async fetch({ store, data }) {
    await store.dispatch("tv/fetchCategory", "airing_today");
    await store.dispatch("tv/fetchCategory", "top_rated");
    await store.dispatch("tv/fetchCategory", "on_the_air");
    await store.dispatch("tv/fetchCategory", "popular");
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
