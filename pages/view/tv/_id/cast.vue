<template>
  <div class="info">
    <TVSubPreviewer :tv_show="tv_shows" :color="tv_shows.color" />
    <NavbarPreview name="view-tv-id" season="true" />

    <div class="info__cast mt-3 pb-5">
      <div class="container">
        <div class="col">
          <div class="row">
            <div class="col">
              <h1 class="heading--primary mb-1">Cast</h1>
            </div>
          </div>
          <div class="row">
            <div
              class="col-4 col-sm-3 col-md-3 col-lg-2 mb-1"
              v-for="cast in tv_shows.credits.cast"
              :key="cast.credit_id"
            >
              <CastCard :cast="cast" />
            </div>
          </div>
          <template v-if="tv_shows.credits.crew.length > 0">
            <div class="row">
              <div class="col">
                <h1 class="heading--primary mt-5 mb-1">Crew</h1>
              </div>
            </div>
            <div class="row">
              <div
                class="col col-lg-2 mb-1"
                v-for="crew in tv_shows.credits.crew"
                :key="crew.credit_id"
              >
                <CrewCard :crew="crew" />
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TVSubPreviewer from "@/components/tv/TVSubPreviewer";
import NavbarPreview from "@/components/layout/NavbarPreview";
import CastCard from "@/components/card/CastCard";
import CrewCard from "@/components/card/CrewCard";
export default {
  async fetch({ store, params }) {
    await store.dispatch("tv/fetchTVShow", params.id);
  },
  components: {
    TVSubPreviewer,
    NavbarPreview,
    CastCard,
    CrewCard
  },
  computed: {
    tv_shows() {
      return this.$store.getters["tv/getCurrent"];
    }
  }
};
</script>

<style></style>
