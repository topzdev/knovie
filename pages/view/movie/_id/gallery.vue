<template>
  <div class="info">
    <MovieSubPreviewer :movie="movie" :color="movie.color" />
    <NavbarPreview name="view-movie-id" />

    <v-container>
      <v-row class="py-0">
        <v-col>
          <h1 class="heading--primary mt-3 mb-1">Wallpapers</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="4"
          v-for="image in movie.images.backdrops"
          :key="image.file_path"
        >
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
        <v-col
          cols="2"
          v-for="image in movie.images.posters"
          :key="image.file_path"
        >
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
import MovieSubPreviewer from "@/components/movie/MovieSubPreviewer";
import NavbarPreview from "@/components/layout/NavbarPreview";
import ImageCard from "@/components/card/ImageCard";

export default {
  async fetch({ store, params }) {
    await store.dispatch("movie/fetchMovie", params.id);
  },
  components: {
    MovieSubPreviewer,
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

<style></style>
