<template>
  <div class="info">
    <SmallPreviewer :movie="movie" :color="movie.color" />
    <NavbarPreview />

    <v-container>
      <v-row class="py-0">
        <v-col>
          <h1 class="heading--primary mt-3 mb-1">Background Images</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4" v-for="image in movie.images.backdrops" :key="image.file_path">
          <ImageCard
            :image="image"
            :size="'w780'"
            class="card--cover"
            :style="`--primary: ${movie.color.secondaryColor}`"
          />
        </v-col>
      </v-row>
      <v-row class="py-0">
        <v-col>
          <h1 class="heading--primary mt-3 mb-1">Posters</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" v-for="image in movie.images.posters" :key="image.file_path">
          <ImageCard
            :image="image"
            :size="'w300'"
            class="card--cover"
            :style="`--primary: ${movie.color.secondaryColor}`"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SmallPreviewer from "@/components/includes/SmallPreviewer";
import NavbarPreview from "@/components/layout/NavbarPreview";
import ImageCard from "@/components/card/ImageCard";

export default {
  async fetch({ store, params }) {
    await store.dispatch("movie/fetchMovie", params.id);
  },
  components: {
    SmallPreviewer,
    NavbarPreview,
    ImageCard
  },
  computed: {
    movie() {
      return this.$store.getters["movie/getCurrent"];
    }
  }
};
</script>

<style>
</style>