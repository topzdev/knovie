<template>
  <div class="info">
    <TVSubPreviewer :tv_show="tv_show" :color="tv_show.color" />
    <NavbarPreview name="view-tv-id" />

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
              v-for="reviews in tv_show.reviews.results"
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
import TVSubPreviewer from "@/components/tv/TVSubPreviewer";
import NavbarPreview from "@/components/layout/NavbarPreview";
import ReviewCard from "@/components/card/ReviewCard";

import Paginator from "@/components/search/Paginator";

export default {
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
    Paginator
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
        page: query.page ? query.page : 1
      });
    }
  },
  computed: {
    tv_show() {
      return this.$store.getters["tv/getCurrent"];
    },
    other_reviews() {
      return this.$store.getters["tv/getReviews"];
    }
  }
};
</script>

<style></style>
