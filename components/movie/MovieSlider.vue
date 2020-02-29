<template>
  <header class="slider">
    <!--   -->
    <VueSlickCarousel class="slider-for" v-bind="mainSlickOption" v-if="movies">
      <div v-for="movie in movies" :key="movie.title">
        <MovieSliderCard :movie="movie" />
      </div>
    </VueSlickCarousel>
  </header>
</template>

<script>
import MovieSliderCard from "../card/MovieSliderCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VueSlickCarousel from "vue-slick-carousel";
export default {
  props: ["category", "movies"],
  components: {
    MovieSliderCard,
    VueSlickCarousel
  },
  data() {
    return {
      mainSlickOption: {
        autoplaySpeed: 10000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        autoplay: true,
        swipe: false,
        pauseOnHover: false
      },
      sideSlickOption: {
        vertical: true,
        infinite: true,
        verticalSwiping: true,
        focusOnSelect: true,
        centerMode: true,
        slidesToShow: 3,
        arrows: false
      },
      loading: false
    };
  }
};
</script>
