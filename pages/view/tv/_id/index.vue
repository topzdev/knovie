<template>
  <div v-if="tv_show">
    <TVPreviewer :tv_show="tv_show" :color="tv_show.color" />

    <v-container class="movie">
      <v-row align="start">
        <v-col cols="9" class="movie__main pt-5">
          <TVDescription :description="tv_show.overview" />
          <TVCast
            :url="`/view/tv/${$route.params.id}/cast`"
            :title="''"
            :casts="tv_show.credits.cast"
          />
        </v-col>
        <v-col cols="3" class="movie__sidebar">
          <TVInfo :title="''" :info="tv_show" />
        </v-col>
      </v-row>
    </v-container>
    <TVGallery :url="`/view/tv/${$route.params.id}/gallery`" :title="''" :images="tv_show.images" />

    <v-container>
      <v-row>
        <v-col cols="9">
          <TVReview
            :url="`/view/tv/${$route.params.id}/reviews`"
            :title="''"
            :reviews="tv_show.reviews.results"
          />
        </v-col>
      </v-row>
    </v-container>
    <!-- 
    <MovieCollection
      :url="`/collection/${$route.params.id}`"
      v-if="tv_show.belongs_to_collection"
      :title="''"
      :collection="tv_show.belongs_to_collection"
      :color="tv_show.color"
    />-->

    <v-container>
      <v-row>
        <v-col cols="9">
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
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TVPreviewer from "@/components/tv/TVPreviewer";
import TVCast from "@/components/tv/TVCast";
import TVGallery from "@/components/tv/TVGallery";
import TVDescription from "@/components/tv/TVDescription";
import TVInfo from "@/components/tv/TVInfo";
import TVReview from "@/components/tv/TVReview";
import TVCollection from "@/components/tv/TVCollection";
import Showcase from "@/components/layout/Showcase";
import { moviePreviewHead } from "@/utils/seoHead";

export default {
  head() {
    return moviePreviewHead(this.tv_show, this.$route);
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
    TVCollection,
    Showcase
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
