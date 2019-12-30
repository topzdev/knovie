<template>
  <div class="info">
    <TVSubPreviewer :tv_show="tv_shows" :color="tv_shows.color" />
    <NavbarPreview name="view-tv-id" />

    <div class="info__cast mt-3 pb-5">
      <v-container>
        <v-col>
          <v-row>
            <v-col>
              <h1 class="heading--primary mb-1">Cast</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              class="col-lg-2 mb-1"
              v-for="cast in tv_shows.credits.cast"
              :key="cast.credit_id"
            >
              <CastCard :cast="cast" />
            </v-col>
          </v-row>
          <template v-if="tv_shows.credits.crew.length > 0">
            <v-row>
              <v-col>
                <h1 class="heading--primary mt-5 mb-1">Crew</h1>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                class="col-lg-2 mb-1"
                v-for="crew in tv_shows.credits.crew"
                :key="crew.credit_id"
              >
                <CrewCard :crew="crew" />
              </v-col>
            </v-row>
          </template>
        </v-col>
      </v-container>
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
