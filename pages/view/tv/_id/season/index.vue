<template>
  <div class="info">
    <TVSubPreviewer :tv_show="tv_show" :color="tv_show.color" />
    <NavbarPreview name="view-tv-id" season="true" />

    <div class="container pb-5">
      <div class="row">
        <div class="col col-9">
          <h1 class="heading--primary mb-1 mt-3">Seasons</h1>
        </div>

        <div class="col col-9">
          <div v-for="season in tv_show.seasons" :key="season.name" class="col-12">
            <SeasonCard :season="season" :title="tv_show.name" />
          </div>
        </div>
        <div class="col col-3">
          <div class="ads-box">
            <adsbygoogle />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TVSubPreviewer from "@/components/tv/TVSubPreviewer";
import NavbarPreview from "@/components/layout/NavbarPreview";
import SeasonCard from "@/components/card/SeasonCard";
import { moviePreviewHead, titleHead } from "@/utils/seoHead";
export default {
  head() {
    return titleHead("Seasons");
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
    SeasonCard
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
