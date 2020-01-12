<template>
  <div class="mt-4">
    <h1 class="heading--primary">{{ title }}</h1>

    <div class="row mt-2" v-if="result">
      <template>
        <div
          class="col-6 mb-1 col-md-3 col-sm-4"
          :class="cardSize ? cardSize : setSize"
          v-for="data in result.slice(0, toShow ? toShow : limitShow)"
          :key="data.id"
        >
          <MovieCard :movie="data" v-if="type === 'Movies'" />
          <TVCard :tv_show="data" v-else-if="type === 'TV Shows'" />
          <PersonCard :person="data" v-else-if="type === 'Person'" />
        </div>
      </template>
    </div>

    <div class="row">
      <div class="d-block ml-auto col-lg-auto" v-if="url">
        <MoreButton :title="`${title} ${type}`" :url="url" />
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from "@/components/card/MovieCard";
import TVCard from "@/components/card/TVCard";
import PersonCard from "@/components/card/PersonCard";
import MoreButton from "@/components/button/MoreButton";

export default {
  components: {
    MovieCard,
    TVCard,
    PersonCard,
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
