<template>
  <div class="collection">
    <CollectionPreviewer :collection="collection" :color="collection.color" />
    <div class="container movie mt-0 mt-lg-4">
      <div class="row" align="start">
        <div class="col-12 col-lg-9 pt-5">
          <MovieDescription :description="collection.overview" />

          <Showcase
            :title="'Movies'"
            :cardSize="'col-lg-3'"
            :result="collection.parts"
            :toShow="8"
            type="Movies"
          />
        </div>

        <div class="col-12 col-lg-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import CollectionPreviewer from "@/components/collection/CollectionPreviewer";
import MovieDescription from "@/components/movie/MovieDescription";
import CollectionInfo from "@/components/collection/CollectionInfo";

import Showcase from "@/components/layout/Showcase";
export default {
  async fetch({ store, params }) {
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

<style></style>
