<template>
  <div>
    <Slider />
    <v-container class="py-5">
      <Showcase title="Upcoming Movies" />
      <Showcase title="Popular" />
      <Showcase title="Top Rated" />
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
  }
};
</script>

<style lang="scss">
@import "./assets/sass/main.scss";
</style>
