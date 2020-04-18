<template>
  <div class="search navbar-padding">
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <lazy-img
        v-if="transition"
        :path="pageBackground"
        alt="Backdrop image"
        size="w185"
        class="search__backdrop fit-image"
      />
    </transition>

    <!-- Filtering or Sorter here -->
    <slot></slot>

    <div class="container">
      <div class="search__content pb-5">
        <client-only>
          <paginator
            v-if="results.total_pages > 0"
            class="pagination__top mt-4"
            :totalPage="results.total_pages"
            :visible="4"
          />
        </client-only>
        <div class="search__result mt-3">
          <template v-if="results.total_pages > 0">
            <div class="row">
              <div
                class="col-6 col-sm-4 col-md-3 col-lg-custom mb-3"
                @mouseenter="setBackground(result.poster_path)"
                @mouseleave="removeBackground"
                v-for="result in results.results"
                :key="result.id"
              >
                <TVCard v-if="type === 'tv'" :tv_show="result" />
                <MovieCard v-else-if="type === 'movie'" :movie="result" />
                <PersonCard v-else-if="type === 'person'" :person="result" />
              </div>
            </div>
          </template>

          <template v-else>
            <h2 class="heading--secondary">No results found</h2>
          </template>
        </div>
        <client-only>
          <Paginator v-if="results.total_pages > 0" :totalPage="results.total_pages" />
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from "../card/MovieCard";
import TVCard from "../card/TVCard";
import PersonCard from "../card/PersonCard";
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
    setBackground: function(url) {
      console.log("Hello", url);
      var self = this;
      setTimeout(function() {
        self.pageBackground = url;
        self.transition = true;
      }, 300);
      console.log(this.transition);
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
