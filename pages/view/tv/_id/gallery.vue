<template>
  <div class="info">
    <TVSubPreviewer :tv_show="tv_show" :color="tv_show.color" />
    <NavbarPreview :name="'view-tv-id'" season="true" />

    <div class="container">
      <div class="row py-0">
        <div class="col">
          <h1 class="heading--primary mt-3 mb-2">Wallpapers</h1>
        </div>
      </div>
      <div class="row">
        <div
          class="col-12 col-md-6 col-lg-4 mb-2"
          v-for="image in tv_show.images.backdrops"
          :key="image.file_path"
        >
          <ImageCard
            :image="image"
            :size="'w780'"
            class="card--cover"
            :style="`--primary: ${tv_show.color.secondaryColor}`"
          />
        </div>
      </div>

      <div class="ads-box">
        <adsbygoogle />
      </div>

      <div class="row py-0">
        <div class="col">
          <h1 class="heading--primary mt-3 mb-2">Posters</h1>
        </div>
      </div>
      <div class="row">
        <div
          class="col-6 col-sm-4 col-md-3 col-lg-custom mb-2"
          v-for="image in tv_show.images.posters"
          :key="image.file_path"
        >
          <ImageCard
            :image="image"
            :size="'w300'"
            class="card--cover"
            :style="`--primary: ${tv_show.color.secondaryColor}`"
          />
        </div>
      </div>
      <div class="ads-box">
        <adsbygoogle />
      </div>
    </div>
  </div>
</template>

<script>
import TVSubPreviewer from "@/components/tv/TVSubPreviewer";
import NavbarPreview from "@/components/layout/NavbarPreview";
import ImageCard from "@/components/card/ImageCard";
import { moviePreviewHead, titleHead } from "@/utils/seoHead";

export default {
  head() {
    return titleHead("Gallery");
  },
  async fetch({ store, params }) {
    await store.dispatch("tv/fetchTVShow", params.id);
  },
  components: {
    TVSubPreviewer,
    NavbarPreview,
    ImageCard
  },
  computed: {
    tv_show() {
      return this.$store.getters["tv/getCurrent"];
    }
  }
};
</script>

<style></style>
