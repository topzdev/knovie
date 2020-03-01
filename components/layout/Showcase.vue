<template>
  <div class="mt-4">
    <h1 class="heading--primary" v-text="title" />

    <div class="row mt-2">
      <template v-if="resultLenght">
        <div
          class="col-6 col-md-3 col-sm-4 mb-3"
          :class="size"
          v-for="data in result.slice(0, toShow ? toShow : limitShow)"
          :key="data.id"
        >
          <MovieCard :movie="data" v-if="type === 'Movies'" />
          <TVCard :tv_show="data" v-else-if="type === 'TV Shows'" />
          <PersonCard :person="data" v-else-if="type === 'Person'" />
        </div>
      </template>

      <template v-else>
        <div class="col">
          <h2 class="heading--secondary">No results found</h2>
        </div>
      </template>
    </div>

    <div class="row">
      <div class="col-auto ml-auto" v-if="url">
        <MoreButton :title="buttonTitle" :url="url" />
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
  props: ["title", "cardSize", "toShow", "result", "url", "type"],
  data() {
    return {
      loading: false,
      setSize: "col-lg-custom",
      limitShow: 15
    };
  },
  components: {
    MovieCard,
    TVCard,
    PersonCard,
    MoreButton
  },
  computed: {
    buttonTitle() {
      return `${this.title} ${this.type}`;
    },
    resultLenght() {
      return this.result != null && this.result.length > 0;
    },
    size() {
      return this.cardSize ? this.cardSize : this.setSize;
    }
  }
};
</script>

<style></style>
