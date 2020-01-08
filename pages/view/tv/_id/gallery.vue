<template>
  <div class="info">
    <TVSubPreviewer :tv_show="tv_show" :color="tv_show.color" />
    <NavbarPreview :name="'view-tv-id'" season="true" />

    <div class="container">
      <div class="row py-0">
        <div class="col">
          <h1 class="heading--primary mt-3 mb-1">Wallpapers</h1>
        </div>
      </div>
      <div class="row">
        <div class="col col-4" v-for="image in tv_show.images.backdrops" :key="image.file_path">
          <ImageCard
            :image="image"
            :size="'w780'"
            class="card--cover"
            :style="`--primary: ${tv_show.color.secondaryColor}`"
          />
        </div>
      </div>
      <div class="row py-0">
        <div class="col">
          <h1 class="heading--primary mt-3 mb-1">Posters</h1>
        </div>
      </div>
      <div class="row">
        <div class="col col-2" v-for="image in tv_show.images.posters" :key="image.file_path">
          <ImageCard
            :image="image"
            :size="'w300'"
            class="card--cover"
            :style="`--primary: ${tv_show.color.secondaryColor}`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TVSubPreviewer from "@/components/tv/TVSubPreviewer";
import NavbarPreview from "@/components/layout/NavbarPreview";
import ImageCard from "@/components/card/ImageCard";

export default {
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
