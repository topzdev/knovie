<template>
  <div>
    <div class="container">
      <div class="slider__details">
        <h1 class="slider__title" v-text="titleTruncate" />

        <p class="slider__rating">
          {{ watch.vote_average }}
          <span>/10</span>
        </p>

        <p class="slider__description" v-text="descriptionTruncate" />

        <div class="slider__actions mt-2">
          <nuxt-link :to="watchLink('view-tv-id')" class="btn btn--primary mr-1">View more</nuxt-link>

          <ClientOnly placeholder="loading....">
            <HeartButton :data="watch" type="tv" />
          </ClientOnly>
        </div>
      </div>
    </div>
    <div class="slider__cover shadow-overlay">
      <lazy-img
        class="fit-image"
        path="watch.backdrop_path"
        size="w1280"
        :data-srcset="imgSrcSet"
        :alt="watch.name"
        aria-label="TV Image slider"
      />
    </div>
  </div>
</template>

<script>
import SliderSubMixins from "@/mixins/SliderSubMixins";
export default {
  mixins: [SliderSubMixins],
  props: ["watch"]
};
</script>

<style>
</style>