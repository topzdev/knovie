<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h1 class="heading--primary mb-2">Cast</h1>
      </div>
      <div
        class="col-4 col-sm-3 col-md-3 col-lg-custom mb-2"
        v-for="cast in casts.slice(0, 10)"
        :key="cast.id"
      >
        <CastCard :cast="cast" />
      </div>
    </div>
    <div class="row">
      <div class="col-auto ml-auto">
        <MoreButton :url="url" title="Cast & Crew" />
      </div>
    </div>
  </div>
</template>

<script>
import MoreButton from "../button/MoreButton";
import CastCard from "../card/CastCard";

export default {
  components: {
    MoreButton,
    CastCard
  },

  props: ["title", "casts", "url"],

  data() {
    return {};
  }
};
</script>

<style></style>
