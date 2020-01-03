<template>
  <div class="collection">
    <CollectionPreviewer :collection="collection" :color="collection.color" />
    <v-container class="movie mt-4">
      <v-row align="start">
        <v-col cols="9" class="movie__main pt-5">
          <MovieDescription :description="collection.overview" />

          <Showcase
            :title="'Movies'"
            :cardSize="'col-lg-3'"
            :result="collection.parts"
            :toShow="8"
            type="Movies"
          />
        </v-col>

        <v-col cols="3"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CollectionPreviewer from "@/components/collection/CollectionPreviewer";
import MovieDescription from "@/components/movie/MovieDescription";
import CollectionInfo from "@/components/collection/CollectionInfo";

import Showcase from "@/components/layout/Showcase";
export default {
  async fetch({ store, params }) {
    console.log("Hello", params.id);
    await store.dispatch("movie/fetchCollection", params.id);
  },

  components: {
    CollectionPreviewer,
    MovieDescription,
    Showcase
  },
  computed: {
    collection() {
      return this.$store.getters["movie/getCollection"];
    }
  }
};
</script>

<style>
</style>