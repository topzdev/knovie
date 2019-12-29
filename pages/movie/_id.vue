<template>
  <div v-if="movie">
    <Previewer :movie="movie" :color="movie.color" />

    <v-container class="movie">
      <v-row>
        <v-col cols="9" class="movie__main pt-5">
          <MovieDescription :title="''" :description="movie.overview" />
          <MovieCast
            :url="`/movie/cast/${$route.params.id}`"
            :title="''"
            :casts="movie.credits.cast"
          />
        </v-col>
        <v-col cols="3" class="movie__sidebar">
          <MovieInfo :title="''" :info="movie" />
        </v-col>
      </v-row>
    </v-container>
    <MovieGallery :url="`/movie/gallery/${$route.params.id}`" :title="''" :images="movie.images" />

    <v-container v-if="movie.reviews.results">
      <v-row>
        <v-col cols="9">
          <MovieReview
            :url="`/movie/reviews/${$route.params.id}`"
            :title="''"
            :reviews="movie.reviews.results"
          />
        </v-col>
      </v-row>
    </v-container>

    <MovieCollection
      :url="`/collection/${$route.params.id}`"
      v-if="movie.belongs_to_collection"
      :title="''"
      :collection="movie.belongs_to_collection"
      :color="movie.color"
    />

    <v-container>
      <v-row>
        <v-col cols="9">
          <Showcase
            v-if="movie.similar.results.length"
            :title="'Related'"
            :cardSize="'col-lg-3'"
            :movies="movie.similar.results"
            :toShow="8"
          />

          <Showcase
            v-else
            :title="'Recommended Movies'"
            :cardSize="'col-lg-3'"
            :movies="movie.recommendations.results"
            :toShow="8"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Previewer from "@/components/includes/Previewer";
import MovieCast from "@/components/movie/MovieCast";
import MovieGallery from "@/components/movie/MovieGallery";
import MovieDescription from "@/components/movie/MovieDescription";
import MovieInfo from "@/components/movie/MovieInfo";
import MovieReview from "@/components/movie/MovieReview";
import MovieCollection from "@/components/movie/MovieCollection";
import Showcase from "@/components/layout/Showcase";

export default {
  async fetch({ params, store }) {
    await store.dispatch("movie/fetchMovie", params.id);
  },
  components: {
    MovieCast,
    Previewer,
    MovieGallery,
    MovieDescription,
    MovieInfo,
    MovieReview,
    MovieCollection,
    Showcase
  },
  watch: {
    $route(to, from) {
      this.$store.dispatch("movie/fetchMovie", this.$route.params.id);
    }
  },
  scrollToTop: true,
  computed: {
    movie() {
      return this.$store.getters["movie/getCurrent"];
    }
  }
};
</script>

<style></style>
