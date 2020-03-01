<template>
  <header class="slider">
    <!--   -->
    <VueSlickCarousel class="slider-for" v-bind="mainSlickOption" v-if="watch">
      <TVSliderCard v-for="tv in limitWatch" :key="tv.name" :watch="tv" />
    </VueSlickCarousel>
  </header>
</template>

<script>
import SliderMixins from "@/mixins/SliderMixins";
import TVSliderCard from "@/components/card/TvSliderCard";
export default {
  components: {
    TVSliderCard
  },
  props: ["category", "watch"],
  mixins: [SliderMixins]
};
</script>
