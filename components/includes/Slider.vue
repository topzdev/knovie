<template>
  <header class="slider">
    <!--   -->
    <VueSlickCarousel
      class="slider-for"
      v-bind="mainSlickOption"
      v-if="getMovies"
    >
      <div v-for="trend in getMovies" :key="trend.title">
        <v-container>
          <div class="slider__details">
            <h1 class="slider__title">{{ trend.title }}</h1>

            <p class="slider__rating mb-2">
              {{ trend.vote_average }}
              <span>/10</span>
            </p>

            <p class="slider__description">{{ trend.overview }}</p>

            <div class="slider__actions mt-2">
              <nuxt-link :to="setLink(trend.id)" class="btn btn--primary mr-1"
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
            :src="trend.backdrop_path"
            :alt="trend.title"
            draggable="false"
            aria-label="Movie Image slider"
          />
        </div>
      </div>
    </VueSlickCarousel>
    <VueSlickCarousel
      class="slider-nav slider__sidebar"
      v-bind="sideSlickOption"
      v-if="getMovies"
    >
      >
      <SliderCard
        v-for="trend in getMovies"
        :key="trend.title"
        :trend="trend"
      />
    </VueSlickCarousel>
  </header>
</template>

<script>
import { mdiHeartOutline } from "@mdi/js";
import SliderCard from "../card/SliderCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VueSlickCarousel from "vue-slick-carousel";

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
  props: ["category"],
  methods: {
    setLink(title) {
      return `/movie/${title}`;
    }
  },
  computed: {
    getMovies() {
      return this.$store.getters["movie/getCategories"](this.$props.category);
    }
  },
  created() {
    this.$store.dispatch("movie/fetchCategory", this.$props.category);
  }
};
</script>
