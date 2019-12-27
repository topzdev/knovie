<template>
  <div class="search pb-5">
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <img
        :src="
          pageBackground
            ? pageBackground
            : imagePath(searched.results[0].poster_path, 'w185')
        "
        alt=""
        class="search__backdrop fit-image"
        v-if="transition"
      />
    </transition>
    <div class="search__filter navbar-padding">
      <v-container>
        <h1 class="heading--primary">
          Search Results for
          <span class="search__query">{{ $route.params.name }}</span>
        </h1>
        <h3 class="search__count" aria-label="Search result count">
          {{ searched.total_results }}
        </h3>
      </v-container>
    </div>
    <v-container>
      <div class="search__content">
        <v-pagination
          class="v-pagination__top"
          v-model="currentPage"
          :length="totalPage ? totalPage : searched.total_pages"
          :total-visible="totalVisible"
          prev-icon="mdi-chevron-left"
          next-icon="mdi-chevron-right"
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
        <v-pagination
          v-model="currentPage"
          :length="totalPage ? totalPage : searched.total_pages"
          :total-visible="totalVisible"
          prev-icon="mdi-chevron-left"
          next-icon="mdi-chevron-right"
        />
      </div>
    </v-container>
  </div>
</template>

<script>
import MovieCard from "@/components/card/MovieCard";
import imagePath from "@/utils/imagePath";
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
    MovieCard
  },
  data() {
    return {
      currentPage: 1,
      totalPage: null,
      totalVisible: 10,
      totalResult: 0,
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
    },
    currentPage() {
      this.$router.push({
        path: this.$route.path,
        query: { page: this.currentPage }
      });
    },
    searched(nextValue, oldValue) {
      this.totalPage = nextValue.total_pages;
      this.totalResult = nextValue.total_results;
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
