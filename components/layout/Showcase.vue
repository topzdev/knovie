<template>
  <div class="mt-4">
    <h1 class="heading--primary">{{ title }}</h1>

    <v-row class="mt-2" v-if="movies">
      <v-col
        cols="6"
        class="mb-1"
        :class="cardSize ? cardSize : setSize"
        v-for="movie in movies.slice(0, toShow ? toShow : limitShow)"
        :key="movie.id"
      >
        <MovieCard :movie="movie" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="auto" class="d-block ml-auto" v-if="url">
        <MoreButton :title="title + ' Movies'" :url="url" />
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
  props: ["title", "cardSize", "toShow", "movies", "url"],
  data() {
    return {
      loading: false,
      setSize: "col-lg-custom",
      limitShow: 15
    };
  }
};
</script>

<style></style>
