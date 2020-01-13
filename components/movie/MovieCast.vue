<template>
  <div>
    <h1 class="heading--primary mb-1">Cast</h1>
    <div class="row">
      <div
        class="col-4 col-sm-3 col-md-3 col-lg-custom"
        v-for="cast in casts.slice(0, 10)"
        :key="cast.id"
      >
        <CastCard :cast="cast" />
      </div>
    </div>
    <div class="row">
      <div class="col col-auto d-block ml-auto">
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
