<template>
  <header class="slider">
    <!--   -->
    <VueSlickCarousel class="slider-for" v-bind="mainSlickOption" v-if="movies">
      <div v-for="movie in movies" :key="movie.title">
        <v-container>
          <div class="slider__details">
            <h1 class="slider__title">{{ movie.title }}</h1>

            <p class="slider__rating mb-2">
              {{ movie.vote_average }}
              <span>/10</span>
            </p>

            <p class="slider__description">
              {{ cliTruncate(movie.overview, 400, { position: "end" }) }}
            </p>

            <div class="slider__actions mt-2">
              <nuxt-link :to="setLink(movie.id)" class="btn btn--primary mr-1"
                >View more</nuxt-link
              >

              <button class="btn btn--favorite">
                <v-icon>{{ icons.heart }}</v-icon>
              </button>
            </div>
          </div>
        </v-container>
        <div class="slider__cover shadow-overlay">
          <img
            class="fit-image"
            :src="imagePath(movie.backdrop_path, 'w1280')"
            :alt="movie.title"
            draggable="false"
            aria-label="Movie Image slider"
          />
        </div>
      </div>
    </VueSlickCarousel>
    <!-- <VueSlickCarousel class="slider-nav slider__sidebar" v-bind="sideSlickOption" v-if="movies">
      >
      <SliderCard v-for="movie in movies" :key="movie.title" :trend="movie" />
    </VueSlickCarousel> -->
  </header>
</template>

<script>
import { mdiHeartOutline } from "@mdi/js";
import SliderCard from "../card/SliderCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VueSlickCarousel from "vue-slick-carousel";
import imagePath from "@/utils/imagePath";
import cliTruncate from "cli-truncate";
export default {
  components: {
    SliderCard,
    VueSlickCarousel
  },
  data() {
    return {
      icons: {
        heart: mdiHeartOutline
      },
      title: "Avenger Endgame",
      mainSlickOption: {
        infinite: true,
        autoplaySpeed: 15000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        autoplay: true,
        swipe: false
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
  },
  props: ["category", "movies"],
  methods: {
    setLink(title) {
      return `/movie/${title}`;
    },
    imagePath,
    cliTruncate
  }
};
</script>
