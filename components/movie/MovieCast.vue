<template>
  <div>
    <h1 class="heading--primary mb-1">Cast</h1>
    <v-row>
      <v-col class="col-lg-15 mb-1" v-for="cast in casts.slice(0, 10)" :key="cast.id">
        <CastCard :cast="cast" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="auto" class="d-block ml-auto">
        <MoreButton :url="url" :title="title + ' Cast & Crew'" />
      </v-col>
    </v-row>
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
