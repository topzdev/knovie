<template>
  <div class="info">
    <MovieSubPreviewer :movie="movie" :color="movie.color" />
    <NavbarPreview name="view-movie-id" />

    <div class="container pb-5">
      <div class="row">
        <div class="col-12">
          <h1 class="heading--primary mb-1 mt-3">Reviews</h1>
        </div>

        <div class="col-12 col-lg-9">
          <div class="row" v-if="other_reviews == null">
            <div
              class="col-12 mb-2"
              v-for="reviews in movie.reviews.results"
              :key="reviews.id"
            >
              <ReviewCard :review="reviews" />
            </div>
          </div>
          <div class="row" v-else>
            <div
              class="col-12 mb-2"
              v-for="reviews in other_reviews.results"
              :key="reviews.id"
            >
              <ReviewCard :review="reviews" />
            </div>
          </div>
        </div>
      </div>

      <div class="row" v-if="other_reviews != null && reviews.total_pages > 1">
        <div class="col-12">
          <Paginator :totalPage="5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieSubPreviewer from "@/components/movie/MovieSubPreviewer";
import NavbarPreview from "@/components/layout/NavbarPreview";
import ReviewCard from "@/components/card/ReviewCard";
import Paginator from "@/components/search/Paginator";
import { moviePreviewHead, titleHead } from "@/utils/seoHead";

export default {
  head() {
    return titleHead("Reviews");
  },
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
    Paginator,
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
        page: query.page ? query.page : 1,
      });
    },
  },
  computed: {
    movie() {
      return this.$store.getters["movie/getCurrent"];
    },
    other_reviews() {
      return this.$store.getters["movie/getReviews"];
    },
  },
};
</script>

<style></style>
