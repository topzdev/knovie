<template>
  <div class="info">
    <TVSubPreviewer :tv_show="tv_show" :color="tv_show.color" />
    <NavbarPreview :name="'view-tv-id'" />

    <v-container>
      <v-row class="py-0">
        <v-col>
          <h1 class="heading--primary mt-3 mb-1">Wallpapers</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="4"
          v-for="image in tv_show.images.backdrops"
          :key="image.file_path"
        >
          <ImageCard
            :image="image"
            :size="'w780'"
            class="card--cover"
            :style="`--primary: ${tv_show.color.secondaryColor}`"
          />
        </v-col>
      </v-row>
      <v-row class="py-0">
        <v-col>
          <h1 class="heading--primary mt-3 mb-1">Posters</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="2"
          v-for="image in tv_show.images.posters"
          :key="image.file_path"
        >
          <ImageCard
            :image="image"
            :size="'w300'"
            class="card--cover"
            :style="`--primary: ${tv_show.color.secondaryColor}`"
          />
        </v-col>
      </v-row>
    </v-container>
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
