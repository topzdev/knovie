<template>
  <div class="info">
    <MovieSubPreviewer :movie="movie" :color="movie.color" />
    <NavbarPreview name="view-movie-id" />

    <v-container class="pb-5">
      <v-row>
        <v-col cols="12">
          <h1 class="heading--primary mb-1 mt-3">Reviews</h1>
        </v-col>

        <v-col cols="8">
          <v-row v-if="other_reviews == null">
            <v-col
              cols="12"
              class="mb-1"
              v-for="reviews in movie.reviews.results"
              :key="reviews.id"
            >
              <ReviewCard :review="reviews" />
            </v-col>
          </v-row>
          <v-row v-else>
            <v-col
              cols="12"
              class="mb-1"
              v-for="reviews in other_reviews.results"
              :key="reviews.id"
            >
              <ReviewCard :review="reviews" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row v-if="other_reviews != null && reviews.total_pages > 1">
        <v-col cols="12">
          <Paginator :totalPage="5" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import MovieSubPreviewer from "@/components/movie/MovieSubPreviewer";
import NavbarPreview from "@/components/layout/NavbarPreview";
import ReviewCard from "@/components/card/ReviewCard";

import Paginator from "@/components/search/Paginator";

export default {
  async fetch({ store, params }) {
    await store.dispatch("movie/fetchMovie", params.id);
  },
  data() {
    return {};
  },
  components: {
    MovieSubPreviewer,
    NavbarPreview,
    ReviewCard,
    Paginator
  },
  watch: {
    $route() {
      let { reviews } = this.movie;
      if (this.movie != null && reviews.results.total_pages < 1) {
        return;
      }
      const { params, query } = this.$route;
      this.$store.dispatch("movie/fetchReviews", {
        id: params.id,
        page: query.page ? query.page : 1
      });
    }
  },
  computed: {
    movie() {
      return this.$store.getters["movie/getCurrent"];
    },
    other_reviews() {
      return this.$store.getters["movie/getReviews"];
    }
  }
};
</script>

<style></style>
