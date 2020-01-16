<template>
  <div>
    <TVSubPreviewer :tv_show="tv_season" :color="tv_season.color" />
    <NavbarPreview name="view-tv-id" season="true" />

    <div class="tv-show container pb-5">
      <div class="row mt-2">
        <div v-if="tv_season.overview.length > 0" class="col col-12 col-lg-10 mb-2">
          <TVOverview :overview="tv_season.overview" />
        </div>
        <div class="col-12 col-lg-10">
          <TVCast :credits="tv_season.credits" />
        </div>
        <div class="col-md-12 col-lg-10 mt-2">
          <TVEpisodes :episodes="tv_season.episodes" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TVSubPreviewer from "@/components/tv/TVSubPreviewer";
import NavbarPreview from "@/components/layout/NavbarPreview";
import TVOverview from "@/components/tv/season/TVOverview";
import TVEpisodes from "@/components/tv/season/TVEpisodes";
import TVCast from "@/components/tv/season/TVCast";
import TVGallery from "@/components/tv/TVGallery";
export default {
  async fetch({ store, params }) {
    const { id, season_id } = params;
    await store.dispatch("tv/fetchSeason", { id, season_id });
  },
  components: {
    TVSubPreviewer,
    NavbarPreview,
    TVOverview,
    TVEpisodes,
    TVCast,
    TVGallery
  },
  computed: {
    tv_season() {
      return this.$store.getters["tv/getSeason"];
    }
  }
};
</script>

<style></style>
