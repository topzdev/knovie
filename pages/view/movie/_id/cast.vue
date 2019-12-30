<template>
  <div class="info">
    <MovieSubPreviewer :movie="movie" :color="movie.color" />
    <NavbarPreview name="view-movie-id" />

    <div class="info__cast mt-3 pb-5">
      <v-container>
        <v-col>
          <v-row>
            <v-col>
              <h1 class="heading--primary mb-1">Cast</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              class="col-lg-2 mb-1"
              v-for="cast in movie.credits.cast"
              :key="cast.credit_id"
            >
              <CastCard :cast="cast" />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h1 class="heading--primary mt-5 mb-1">Crew</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              class="col-lg-2 mb-1"
              v-for="crew in movie.credits.crew"
              :key="crew.credit_id"
            >
              <CrewCard :crew="crew" />
            </v-col>
          </v-row>
        </v-col>
      </v-container>
    </div>
  </div>
</template>

<script>
import MovieSubPreviewer from "@/components/movie/MovieSubPreviewer";
import NavbarPreview from "@/components/layout/NavbarPreview";
import CastCard from "@/components/card/CastCard";
import CrewCard from "@/components/card/CrewCard";
export default {
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
