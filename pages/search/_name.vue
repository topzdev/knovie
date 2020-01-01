<template>
  <div>
    <SearchResult :results="searched" type="movie">
      <div class="search__filter">
        <v-container>
          <h1 class="heading--primary">
            Search Results for
            <span class="search__query" v-text="$route.params.name" />
          </h1>
          <h3
            class="search__count"
            aria-label="Search result count"
            v-text="numeral(searched.total_results).format('0,0')"
          />
        </v-container>
      </div>
    </SearchResult>
  </div>
</template>

<script>
import SearchResult from "@/components/search/SearchResult";
import numeral from "numeral";

export default {
  async fetch({ store, params, query }) {
    // console.log(params.name, query.page);
    await store.dispatch("movie/fetchSearch", {
      query: params.name,
      page: query.page ? query.page : 1
    });
  },
  components: {
    SearchResult
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
  methods: {
    numeral
  },
  computed: {
    searched() {
      return this.$store.getters["movie/getSearch"];
    }
  }
};
</script>

<style></style>
