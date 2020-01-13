<template>
  <div v-if="movie">
    <MoviePreviewer :movie="movie" :color="movie.color" />

    <div class="movie container">
      <div class="row">
        <div class="col-md-12 col-lg-9 movie__main pt-5">
          <MovieDescription :description="movie.overview" />

          <MovieCast :url="`/view/movie/${$route.params.id}/cast`" :casts="movie.credits.cast" />
        </div>
        <div class="col-md-12 col-lg-3 movie__sidebar">
          <MovieInfo :info="movie" />
        </div>
      </div>
    </div>
    <MovieGallery :url="`/view/movie/${$route.params.id}/gallery`" :images="movie.images" />

    <div class="container" v-if="movie.reviews.results">
      <div class="row">
        <div class="col-md-12 col-lg-9">
          <MovieReview
            :url="`/view/movie/${$route.params.id}/reviews`"
            :reviews="movie.reviews.results"
          />
        </div>
      </div>
    </div>

    <MovieCollection
      v-if="movie.belongs_to_collection"
      :collection="movie.belongs_to_collection"
      :color="movie.color"
    />

    <div class="container">
      <div class="row">
        <div class="col-md-12 col-lg-9">
          <Showcase
            v-if="movie.similar.results.length"
            :title="'Related'"
            :cardSize="'col-lg-3'"
            :result="movie.similar.results"
            :toShow="8"
            type="Movies"
          />

          <Showcase
            v-else
            :title="'Recommended Movies'"
            :cardSize="'col-lg-3'"
            :result="movie.recommendations.results"
            :toShow="8"
            type="Movies"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MoviePreviewer from "@/components/movie/MoviePreviewer";
import MovieCast from "@/components/movie/MovieCast";
import MovieGallery from "@/components/movie/MovieGallery";
import MovieDescription from "@/components/movie/MovieDescription";
import MovieInfo from "@/components/movie/MovieInfo";
import MovieReview from "@/components/movie/MovieReview";
import MovieCollection from "@/components/movie/MovieCollection";
import Showcase from "@/components/layout/Showcase";
import { moviePreviewHead } from "@/utils/seoHead";
import parseLink from "@/utils/parseLink";
export default {
  head() {
    return moviePreviewHead(this.movie, this.$route);
  },
  async fetch({ params, store }) {
    await store.dispatch("movie/fetchMovie", params.id);
  },
  components: {
    MovieCast,
    MoviePreviewer,
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
  methods: { parseLink },
  scrollToTop: true,
  computed: {
    movie() {
      return this.$store.getters["movie/getCurrent"];
    }
  }
};
</script>

<style></style>
