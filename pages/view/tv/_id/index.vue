<template>
  <div v-if="tv_show">
    <TVPreviewer :tv_show="tv_show" :color="tv_show.color" />

    <div class="movie container">
      <div class="row" align="start">
        <div class="ol-md-12 col-lg-9 movie__main pt-5">
          <TVDescription :description="tv_show.overview" />
          <TVCast :url="`/view/tv/${$route.params.id}/cast`" :casts="tv_show.credits.cast" />
        </div>
        <div class="col-md-12 col-lg-3 movie__sidebar">
          <TVInfo :info="tv_show" />
        </div>
      </div>
    </div>
    <TVGallery :url="`/view/tv/${$route.params.id}/gallery`" :images="tv_show.images" />

    <div class="container">
      <div class="row">
        <div class="col-md-12 col-lg-9">
          <TVReview
            :url="`/view/tv/${$route.params.id}/reviews`"
            :reviews="tv_show.reviews.results"
          />
        </div>
        <div class="col-md-12 col-lg-3">
          <div class="ads-box">
            <adsbygoogle />
          </div>
        </div>
      </div>
    </div>

    <TVSeasons
      class="mt-5 mb-5"
      :tv_season="tv_show.seasons"
      :color="tv_show.color"
      :url="`/view/tv/${$route.params.id}/season`"
    />

    <div class="container">
      <div class="row">
        <div class="col-lg-9">
          <Showcase
            v-if="tv_show.similar.results.length"
            :title="'Related'"
            :cardSize="'col-lg-3'"
            :result="tv_show.similar.results"
            :toShow="8"
            type="TV Shows"
          />

          <Showcase
            v-else
            :title="'Recommended Movies'"
            :cardSize="'col-lg-3'"
            :result="tv_show.recommendations.results"
            :toShow="8"
            type="TV Shows"
          />
        </div>
        <div class="col-lg-3">
          <div class="ads-box">
            <adsbygoogle />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TVPreviewer from "@/components/tv/TVPreviewer";
import TVCast from "@/components/tv/TVCast";
import TVGallery from "@/components/tv/TVGallery";
import TVDescription from "@/components/tv/TVDescription";
import TVInfo from "@/components/tv/TVInfo";
import TVReview from "@/components/tv/TVReview";
import TVSeasons from "@/components/tv/TVSeasons";
import Showcase from "@/components/layout/Showcase";
import { moviePreviewHead, titleHead } from "@/utils/seoHead";

export default {
  head() {
    return titleHead("");
  },
  async fetch({ params, store }) {
    await store.dispatch("tv/fetchTVShow", params.id);
  },
  components: {
    TVCast,
    TVPreviewer,
    TVGallery,
    TVDescription,
    TVInfo,
    TVReview,
    Showcase,
    TVSeasons
  },
  watch: {
    $route(to, from) {
      this.$store.dispatch("tv/fetchTVShow", this.$route.params.id);
    }
  },
  scrollToTop: true,
  computed: {
    tv_show() {
      return this.$store.getters["tv/getCurrent"];
    }
  }
};
</script>

<style></style>
