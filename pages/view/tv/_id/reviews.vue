<template>
  <div class="info">
    <TVSubPreviewer :tv_show="tv_show" :color="tv_show.color" />
    <NavbarPreview name="view-tv-id" season="true" />

    <div class="container pb-5">
      <div class="row">
        <div class="col col-12">
          <h1 class="heading--primary mb-1 mt-3">Reviews</h1>
        </div>

        <div class="col-12 col-lg-9">
          <div class="row" v-if="other_reviews == null">
            <div
              class="col col-12 mb-1"
              v-for="reviews in tv_show.reviews.results"
              :key="reviews.id"
            >
              <ReviewCard :review="reviews" />
            </div>
          </div>
          <div class="row" v-else>
            <div
              class="col col-12 mb-1"
              v-for="reviews in other_reviews.results"
              :key="reviews.id"
            >
              <ReviewCard :review="reviews" />
            </div>
          </div>
        </div>
      </div>

      <div class="row" v-if="other_reviews != null && reviews.total_pages > 1">
        <div class="col col-12">
          <Paginator :totalPage="5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TVSubPreviewer from "@/components/tv/TVSubPreviewer";
import NavbarPreview from "@/components/layout/NavbarPreview";
import ReviewCard from "@/components/card/ReviewCard";
import { moviePreviewHead, titleHead } from "@/utils/seoHead";
import Paginator from "@/components/search/Paginator";

export default {
  head() {
    return titleHead("Reviews");
  },
  async fetch({ store, params }) {
    await store.dispatch("tv/fetchTVShow", params.id);
  },
  data() {
    return {};
  },
  components: {
    TVSubPreviewer,
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
      this.$store.dispatch("tv/fetchReviews", {
        id: params.id,
        page: query.page ? query.page : 1,
      });
    },
  },
  computed: {
    tv_show() {
      return this.$store.getters["tv/getCurrent"];
    },
    other_reviews() {
      return this.$store.getters["tv/getReviews"];
    },
  },
};
</script>

<style></style>
