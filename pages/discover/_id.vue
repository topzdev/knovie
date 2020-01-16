<template>
  <SearchResult :results="results" :type="results.type === 'movie' ? 'movie' : 'tv'">
    <div class="search__filter mt-2">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-5 col-lg-6 py-0">
            <h1 class="heading--primary search__toggle">
              Discover
              <DiscoverToggle :toggle="results.type" v-on:dis-toggle="disToggler" />
            </h1>
            <h3
              class="search__count"
              aria-label="Search result count"
              v-text="numeral(results.total_results).format('0,0')"
              title="total results"
            />
          </div>

          <div class="col-12 col-md-7 col-lg-6 search__selects mt-2 mt-lg-0 ml-auto">
            <div class="row search__sorter">
              <div class="col col-3 py-0">
                <vue-select
                  label="Year"
                  :options="getYears"
                  v-model="filter.year_value"
                  placeholder="Select year"
                />
              </div>
              <div class="col col-5 py-0">
                <vue-select
                  label="Sort by"
                  :options="
                    results.type === 'movie' ? getSortMovieBy : getSortTVBy
                  "
                  item-text="name"
                  item-value="id"
                  v-model="filter.sort_value"
                  placeholder="Select year"
                />
              </div>
              <div class="col col-4 py-0">
                <vue-select
                  label="Genre"
                  :options="
                    results.type === 'movie' ? getMovieGenre : getTVGenre
                  "
                  item-text="name"
                  item-value="id"
                  v-model="filter.genre_value"
                  placeholder="Select Genre"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SearchResult>
</template>

<script>
import SearchResult from "@/components/search/SearchResult";
import DiscoverToggle from "@/components/button/DiscoverToggle";
import numeral from "numeral";
import findProperties from "@/utils/findProperties";
import seoPage from "@/utils/seoPage";
import VueSelect from "@/components/input/VueSelect";
export default {
  head() {
    return seoPage(
      "Discover",
      "Discover Movies and TV Shows, Filter by genre, year, title, vote, release date and popularity"
    );
  },
  async fetch({ store, query }) {
    const { genre, type } = query;
    console.log(type);
    const { getMovieGenres, getTVGenres } = store.getters;
    await store.dispatch("fetchRecommend", {
      year_value: new Date().getFullYear(),
      sort_value: "popularity.desc",
      genre_value: query.genre
        ? findProperties(
            type === "movie" ? getMovieGenres : getTVGenres,
            "name",
            query.genre
          ).id
        : -1,
      page: 1,
      type: type ? type : "movie"
    });
  },
  data() {
    return {
      type: "Movies",
      filter: {
        year_value: "All",
        sort_value: "popularity.desc",
        genre_value: -1,
        page: 1,
        toggle: false
      },
      filterToggle: false
    };
  },
  components: {
    SearchResult,
    DiscoverToggle,
    VueSelect
  },
  methods: {
    numeral,
    fetchResults(page) {
      const { year_value, sort_value, genre_value, toggle } = this.filter;
      this.$store.dispatch("fetchRecommend", {
        year_value,
        sort_value,
        genre_value,
        page,
        type: toggle ? "tv" : "movie"
      });
    },
    disToggler(toggle) {
      this.filter.toggle = toggle;
      this.fetchResults(this.page);
    }
  },
  computed: {
    results: function() {
      return this.$store.getters.getRecommend;
    },
    getYears: function() {
      return this.$store.getters.getYears;
    },
    getMovieGenre: function() {
      return this.$store.getters.getMovieGenres;
    },
    getTVGenre: function() {
      return this.$store.getters.getTVGenres;
    },
    getSortMovieBy: function() {
      return this.$store.getters.getSortMovieBy;
    },
    getSortTVBy: function() {
      return this.$store.getters.getSortTVBy;
    }
  },

  watch: {
    $route() {
      const { params, query } = this.$route;
      this.page = query.page;
      this.fetchResults(query.page);
    },
    filter: {
      handler() {
        this.fetchResults(this.page);
      },
      deep: true
    }
  }
};
</script>

<style></style>
