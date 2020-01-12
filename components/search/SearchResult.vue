<template>
  <div class="search navbar-padding">
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <img
        :src="pageBackground"
        alt="Backdrop image"
        class="search__backdrop fit-image"
        v-if="transition"
      />
    </transition>

    <!-- Filtering or Sorter here -->
    <slot></slot>

    <div class="container">
      <div class="search__content mb-5">
        <Paginator
          v-if="results.total_pages > 0"
          class="v-pagination__top"
          :totalPage="results.total_pages"
          :visible="7"
        />
        <div class="search__result mb-3 mt-3">
          <div class="row">
            <div
              class="col-6 col-sm-4 col-md-3 col-lg-custom mb-1"
              @mouseenter="setBackground(result.poster_path)"
              @mouseleave="removeBackground()"
              v-for="result in results.results"
              :key="result.id"
            >
              <TVCard v-if="type === 'tv'" :tv_show="result" />
              <MovieCard v-else-if="type === 'movie'" :movie="result" />
              <PersonCard v-else-if="type === 'people'" :person="result" />
            </div>
          </div>
        </div>
        <Paginator v-if="results.total_pages > 0" :totalPage="results.total_pages" />
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from "../card/MovieCard";
import TVCard from "../card/TVCard";
import PersonCard from "../card/PersonCard";
import imagePath from "@/utils/imagePath";
import Paginator from "../search/Paginator";

export default {
  props: ["results", "type"],
  data() {
    return {
      pageBackground: null,
      transition: false
    };
  },
  components: {
    MovieCard,
    TVCard,
    Paginator,
    PersonCard
  },
  methods: {
    imagePath,
    setBackground: function(url) {
      var self = this;
      setTimeout(function() {
        self.pageBackground = imagePath(url, "w185");
        self.transition = true;
      }, 300);
    },
    removeBackground: function() {
      var self = this;
      setTimeout(function() {
        self.transition = false;
      }, 300);
    }
  }
};
</script>

<style></style>
