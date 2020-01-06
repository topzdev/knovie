<template>
  <div class="info">
    <MovieSubPreviewer :movie="movie" :color="movie.color" />
    <NavbarPreview name="view-movie-id" />

    <div class="container">
      <div class="row py-0">
        <div class="col">
          <h1 class="heading--primary mt-3 mb-1">Wallpapers</h1>
        </div>
      </div>
      <div class="row">
        <div
          class="col col-4"
          v-for="image in movie.images.backdrops"
          :key="image.file_path"
        >
          <ImageCard
            :image="image"
            :size="'w780'"
            class="card--cover"
            :style="`--primary: ${movie.color.secondaryColor}`"
          />
        </div>
      </div>
      <div class="row py-0">
        <div class="col">
          <h1 class="heading--primary mt-3 mb-1">Posters</h1>
        </div>
      </div>
      <div class="row">
        <div
          class="col col-2"
          v-for="image in movie.images.posters"
          :key="image.file_path"
        >
          <ImageCard
            :image="image"
            :size="'w300'"
            class="card--cover"
            :style="`--primary: ${movie.color.secondaryColor}`"
          />
        </div>
      </div>
    </div>
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
