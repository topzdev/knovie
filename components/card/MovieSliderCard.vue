<template
  >
  <div>
    <div class="container">
      <div class="slider__details">
        <h1 class="slider__title" v-text="titleTruncate" />

        <p class="slider__rating mb-1">
          {{ watch.vote_average }}
          <span>/10</span>
        </p>

        <p class="slider__description" v-text="descriptionTruncate" />

        <div class="slider__actions mt-2">
          <nuxt-link :to="watchLink('view-movie-id')" class="btn btn--primary mr-1">View more</nuxt-link>

          <client-only>
            <HeartButton :data="watch" type="movie" />
          </client-only>
        </div>
      </div>
    </div>
    <div class="slider__cover shadow-overlay">
      <lazy-img
        class="fit-image"
        :path="watch.backdrop_path"
        size="w780"
        :data-srcset="imgSrcSet"
        :alt="watch.title"
        aria-label="Movie Image slider"
      />
    </div>
  </div>
</template>

<script>
import parseLink from "@/utils/parseLink";

import SliderSubMixins from "@/mixins/SliderSubMixins";
export default {
  mixins: [SliderSubMixins],
  props: ["watch"]
};
</script>
