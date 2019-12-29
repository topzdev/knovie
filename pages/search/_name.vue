<template>
  <div class="search pb-5">
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <img
        :src="pageBackground"
        alt="Backdrop image"
        class="search__backdrop fit-image"
        v-if="transition"
      />
    </transition>
    <div class="search__filter navbar-padding">
      <v-container>
        <h1 class="heading--primary">
          Search Results for
          <span class="search__query" v-text="$route.params.name" />
        </h1>
        <h3
          class="search__count"
          aria-label="Search result count"
          v-text=" searched.total_results"
        />
      </v-container>
    </div>
    <v-container>
      <div class="search__content">
        <Paginator
          class="v-pagination__top"
          :totalPage="totalPage ? totalPage : searched.total_pages"
          :visible="7"
        />
        <div class="search__result mb-3 mt-3">
          <v-row>
            <v-col
              @mouseenter="setBackground(movie.poster_path)"
              @mouseleave="removeBackground()"
              v-for="movie in searched.results"
              :key="movie.id"
              class="col-lg-custom mb-2"
            >
              <MovieCard :movie="movie" />
            </v-col>
          </v-row>
        </div>
        <Paginator :totalPage="totalPage ? totalPage : searched.total_pages" />
      </div>
    </v-container>
  </div>
</template>

<script>
import MovieCard from "@/components/card/MovieCard";
import imagePath from "@/utils/imagePath";
import Paginator from "@/components/search/Paginator";

export default {
  async fetch({ store, params, query }) {
    // console.log(params.name, query.page);
    await store.dispatch("movie/fetchSearch", {
      query: params.name,
      page: query.page ? query.page : 1
    });
  },
  methods: {
    imagePath,
    setBackground(url) {
      var self = this;
      setTimeout(function() {
        self.pageBackground = imagePath(url, "w185");
        self.transition = true;
      }, 300);
    },
    removeBackground() {
      var self = this;
      setTimeout(function() {
        self.transition = false;
      }, 300);
    }
  },
  components: {
    MovieCard,
    Paginator
  },
  data() {
    return {
      pageBackground: null,
      transition: false
    };
  },
  watch: {
    $route() {
      const { params, query } = this.$route;
      this.$store.dispatch("movie/fetchSearch", {
        query: params.name,
        page: query.page ? query.page : 1
      });
    }
  },

  computed: {
    searched() {
      return this.$store.getters["movie/getSearch"];
    }
  }
};
</script>

<style></style>
