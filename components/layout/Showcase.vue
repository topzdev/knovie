<template>
  <div class="mt-4">
    <h1 class="heading--primary">{{ title }}</h1>

    <v-row class="mt-2">
      <v-col cols="6" class="mb-1" :class="setSize">
        <MovieCard />
      </v-col>
      <v-col cols="6" class="mb-1" :class="setSize">
        <MovieCard />
      </v-col>
      <v-col cols="6" class="mb-1" :class="setSize">
        <MovieCard />
      </v-col>
      <v-col cols="6" class="mb-1" :class="setSize">
        <MovieCard />
      </v-col>
      <v-col cols="6" class="mb-1" :class="setSize">
        <MovieCard />
      </v-col>
      <v-col cols="6" class="mb-1" :class="setSize">
        <MovieCard />
      </v-col>
      <v-col cols="6" class="mb-1" :class="setSize">
        <MovieCard />
      </v-col>
      <v-col cols="6" class="mb-1" :class="setSize">
        <MovieCard />
      </v-col>
      <v-col cols="6" class="mb-1" :class="setSize">
        <MovieCard />
      </v-col>
      <v-col cols="6" class="mb-1" :class="setSize">
        <MovieCard />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="auto" class="d-block ml-auto">
        <MoreButton :title="title+ ' Movies'" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MovieCard from "../../components/card/MovieCard";
import MoreButton from "../../components/button/MoreButton";
export default {
  components: {
    MovieCard,
    MoreButton
  },
  props: ["title", "cardSize"],
  data() {
    return {
      movies: null,
      loading: false,
      setSize: "col-lg-custom"
    };
  },

  created() {
    this.setSize = this.$props.cardSize
      ? this.$props.cardSize
      : "col-lg-custom";
  }
};
</script>

<style></style>
