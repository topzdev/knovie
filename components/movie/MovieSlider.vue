<template>
  <header class="slider">
    <!--   -->
    <VueSlickCarousel class="slider-for" v-bind="mainSlickOption" v-if="watch">
      <div v-for="movie in limitWatch" :key="movie.title">
        <MovieSliderCard :watch="movie" />
      </div>
    </VueSlickCarousel>
  </header>
</template>

<script>
import MovieSliderCard from "../card/MovieSliderCard";
import SliderMixins from "@/mixins/SliderMixins";
export default {
  mixins: [SliderMixins],
  props: ["category", "watch"],
  components: {
    MovieSliderCard
  }
};
</script>
