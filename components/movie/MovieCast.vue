<template>
  <div>
    <h1 class="heading--primary mb-1">Cast</h1>
    <v-row>
      <v-col class="col-lg-15 mb-1">
        <CastCard />
      </v-col>
      <v-col class="col-lg-15 mb-1">
        <CastCard />
      </v-col>
      <v-col class="col-lg-15 mb-1">
        <CastCard />
      </v-col>
      <v-col class="col-lg-15 mb-1">
        <CastCard />
      </v-col>
      <v-col class="col-lg-15 mb-1">
        <CastCard />
      </v-col>
      <v-col class="col-lg-15 mb-1">
        <CastCard />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="auto" class="d-block ml-auto">
        <MoreButton :title="title+ ' Cast & Crew'" />
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

  props: ["title"],

  data() {
    return {};
  }
};
</script>

<style>
</style>