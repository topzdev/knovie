<template>
  <div>
    <SearchResult :results="result().data" :type="result().type">
      <div class="search__filter">
        <div class="container">
          <h1 class="heading--primary">
            Search Results for
            <span class="search__query" v-text="$route.params.name" />
          </h1>
          <h3 class="search__count" aria-label="Search result count" v-text="totalResults" />

          <div class="search__tab">
            <button
              class="search__tab-item"
              :class="{ 'search__tab-active': active.movie }"
              @click="tabChanger('movie')"
              title="resutls for Movie"
            >
              Movies
              <span>({{ movie.total_results }})</span>
            </button>
            <button
              class="search__tab-item"
              :class="{ 'search__tab-active': active.tv_show }"
              @click="tabChanger('tv_show')"
              title="results for TV shows"
            >
              TV Shows
              <span>({{ tv_show.total_results }})</span>
            </button>
            <button
              class="search__tab-item"
              :class="{ 'search__tab-active': active.people }"
              @click="tabChanger('people')"
              title="results for People"
            >
              People
              <span>({{ people.total_results }})</span>
            </button>
          </div>
        </div>
      </div>
    </SearchResult>
  </div>
</template>

<script>
import SearchResult from "@/components/search/SearchResult";
import numeral from "numeral";
import seoPage from "@/utils/seoPage";

export default {
  head() {
    return seoPage(
      "Search",
      "Fast Search of Movies, TV Shows and Crew and Cast"
    );
  },
  async fetch({ store, params, query }) {
    await store.dispatch("movie/fetchSearch", {
      query: params.name,
      page: query.page ? query.page : 1
    });

    await store.dispatch("tv/fetchSearch", {
      query: params.name,
      page: query.page ? query.page : 1
    });

    await store.dispatch("person/fetchSearch", {
      query: params.name,
      page: query.page ? query.page : 1
    });
  },
  components: {
    SearchResult
  },
  data() {
    return {
      active: {
        movie: true,
        tv_show: false,
        people: false
      },
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

      this.$store.dispatch("tv/fetchSearch", {
        query: params.name,
        page: query.page ? query.page : 1
      });

      this.$store.dispatch("person/fetchSearch", {
        query: params.name,
        page: query.page ? query.page : 1
      });
    }
  },
  methods: {
    numeral,
    result() {
      const { movie, tv_show, people } = this.active;

      if (movie)
        return {
          type: "movie",
          data: this.movie,
          length: this.movie.total_results
        };
      if (tv_show)
        return {
          type: "tv",
          data: this.tv_show,
          length: this.tv_show.total_results
        };
      if (people)
        return {
          type: "person",
          data: this.people,
          length: this.people.total_results
        };
    },
    tabChanger(type) {
      this.active.movie = false;
      this.active.tv_show = false;
      this.active.people = false;
      this.active[type] = true;
    }
  },
  computed: {
    movie() {
      return this.$store.getters["movie/getSearch"];
    },
    tv_show() {
      return this.$store.getters["tv/getSearch"];
    },
    people() {
      return this.$store.getters["person/getSearch"];
    },
    totalResults() {
      return numeral(
        this.movie.total_results +
          this.tv_show.total_results +
          this.people.total_results
      ).format("0,0");
    }
  }
};
</script>
PeopleCard

<style></style>
