<template>
  <div>
    <Previewer />
    <v-container class="movie">
      <v-row>
        <v-col cols="9" class="movie__main">
          <MovieDescription :title="title" />
          <MovieCast :title="title" casts />
        </v-col>
        <v-col cols="3" class="movie__sidebar">
          <MovieInfo :title="title" overview />
        </v-col>
      </v-row>
    </v-container>
    <MovieGallery :title="title" images />

    <v-container>
      <v-row>
        <v-col cols="9">
          <MovieReview :title="title" reviews />
        </v-col>
      </v-row>
    </v-container>

    <MovieCollection :title="title" />

    <v-container>
      <v-row>
        <v-col cols="9">
          <Showcase :title="'Related'" :cardSize="'col-lg-3'" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Previewer from "../../components/includes/Previewer";
import MovieCast from "../../components/movie/MovieCast";
import MovieGallery from "../../components/movie/MovieGallery";
import MovieDescription from "../../components/movie/MovieDescription";
import MovieInfo from "../../components/movie/MovieInfo";
import MovieReview from "../../components/movie/MovieReview";
import MovieCollection from "../../components/movie/MovieCollection";
import Showcase from "../../components/layout/Showcase";

export default {
  components: {
    MovieCast,
    Previewer,
    MovieGallery,
    MovieDescription,
    MovieInfo,
    MovieReview,
    MovieCollection,
    Showcase
  },
  data() {
    return {
      title: ""
    };
  },
  watch: {
    $route(to, from) {}
  },
  created() {
    this.title = this.$route.params.title;
  }
};
</script>

<style></style>
