<template>
  <header class="slider">
    <!--   -->
    <VueSlickCarousel class="slider-for" v-bind="mainSlickOption" v-if="tv_show">
      <div v-for="tv in tv_show" :key="tv.name">
        <div class="container">
          <div class="slider__details">
            <h1 class="slider__title">{{ tv.name }}</h1>

            <p class="slider__rating">
              {{ tv.vote_average }}
              <span>/10</span>
            </p>

            <p class="slider__description">{{ cliTruncate(tv.overview, 180, { position: "end" }) }}</p>

            <div class="slider__actions mt-2">
              <nuxt-link
                :to="{
                  name: 'view-tv-id',
                  params: { id: parseLink(tv.name, tv.id, true) }
                }"
                class="btn btn--primary mr-1"
              >View more</nuxt-link>

              <ClientOnly placeholder="loading....">
                <HeartButton :data="tv" type="tv" />
              </ClientOnly>
            </div>
          </div>
        </div>
        <div class="slider__cover shadow-overlay">
          <img
            class="fit-image"
            v-lazy="imagePath(tv.backdrop_path, 'w1280')"
            :alt="tv.name"
            draggable="false"
            aria-label="TV Image slider"
            onerror="this.style.display='none'"
          />
        </div>
      </div>
    </VueSlickCarousel>
    <!-- <VueSlickCarousel class="slider-nav slider__sidebar" v-bind="sideSlickOption" v-if="TVs">
      >
      <SliderCard v-for="TV in TVs" :key="tv.name" :trend="TV" />
    </VueSlickCarousel>-->
  </header>
</template>

<script>
import { mdiHeartOutline } from "@mdi/js";
import SliderCard from "../card/SliderCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VueSlickCarousel from "vue-slick-carousel";
import imagePath from "@/utils/imagePath";
import parseLink from "@/utils/parseLink";
import HeartButton from "@/components/button/HeartButton";

import cliTruncate from "cli-truncate";
export default {
  components: {
    SliderCard,
    HeartButton,
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
        autoplaySpeed: 8000,
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
  props: ["category", "tv_show"],
  methods: {
    parseLink,
    imagePath,
    cliTruncate
  }
};
</script>
