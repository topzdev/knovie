<template>
  <div class="mt-4">
    <h1 class="heading--primary">{{ title }}</h1>

    <v-row class="mt-2" v-if="result">
      <template v-if="type === 'Movies'">
        <v-col
          cols="6"
          class="mb-1"
          :class="cardSize ? cardSize : setSize"
          v-for="movie in result.slice(0, toShow ? toShow : limitShow)"
          :key="movie.id"
        >
          <MovieCard :movie="movie" />
        </v-col>
      </template>

      <template v-else-if="type === 'TV Shows'">
        <v-col
          cols="6"
          class="mb-1"
          :class="cardSize ? cardSize : setSize"
          v-for="tv in result.slice(0, toShow ? toShow : limitShow)"
          :key="tv.id"
        >
          <TVCard :tv_show="tv" />
        </v-col>
      </template>
    </v-row>

    <v-row>
      <v-col cols="auto" class="d-block ml-auto" v-if="url">
        <MoreButton :title="`${title} ${type}`" :url="url" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MovieCard from "@/components/card/MovieCard";
import TVCard from "@/components/card/TVCard";
import MoreButton from "@/components/button/MoreButton";

export default {
  components: {
    MovieCard,
    TVCard,
    MoreButton
  },
  props: ["title", "cardSize", "toShow", "result", "url", "type"],
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
