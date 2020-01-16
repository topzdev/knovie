<template>
  <div class="info">
    <MovieSubPreviewer :movie="movie" :color="movie.color" />
    <NavbarPreview name="view-movie-id" />

    <div class="info__cast mt-3 pb-5">
      <div class="container">
        <div class="col">
          <div class="row">
            <div class="col">
              <h1 class="heading--primary mt-3 mb-3">Cast</h1>
            </div>
          </div>
          <div class="row">
            <div
              class="col-4 col-sm-3 col-md-3 col-lg-2 mb-2"
              v-for="cast in movie.credits.cast"
              :key="cast.credit_id"
            >
              <CastCard :cast="cast" />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h1 class="heading--primary mt-5 mb-3">Crew</h1>
            </div>
          </div>
          <div class="row">
            <div
              class="col-4 col-sm-3 col-md-3 col-lg-2 mb-2"
              v-for="crew in movie.credits.crew"
              :key="crew.credit_id"
            >
              <CrewCard :crew="crew" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieSubPreviewer from "@/components/movie/MovieSubPreviewer";
import NavbarPreview from "@/components/layout/NavbarPreview";
import CastCard from "@/components/card/CastCard";
import CrewCard from "@/components/card/CrewCard";
import { moviePreviewHead } from "@/utils/seoHead";
export default {
  head() {
    return moviePreviewHead(this.movie, this.$route, "Cast");
  },
  async fetch({ store, params }) {
    await store.dispatch("movie/fetchMovie", params.id);
  },
  components: {
    MovieSubPreviewer,
    NavbarPreview,
    CastCard,
    CrewCard
  },
  computed: {
    movie() {
      return this.$store.getters["movie/getCurrent"];
    }
  }
};
</script>

<style></style>
