<template>
  <search-result :results="results" type="person">
    <div class="search__filter">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="heading--primary">Person</h1>
            <h3
              class="search__count"
              aria-label="Search result count"
              v-text="totalResults"
              title="total results"
            />
          </div>
        </div>
      </div>
    </div>
  </search-result>
</template>

<script>
import SearchResult from "@/components/search/SearchResult";
import numeral from "numeral";
import seoPage from "@/utils/seoPage";

export default {
  head() {
    return seoPage(
      "Person",
      "Find known Actors and Actres also the crews of the Movie and TV Shows"
    );
  },
  async fetch({ store, query }) {
    const { page } = query;
    await store.dispatch("person/fetchCategory", {
      category: "popular",
      page
    });
  },
  components: {
    SearchResult
  },
  methods: { numeral },
  watch: {
    async $route() {
      const { page } = this.$route.query;
      await this.$store.dispatch("person/fetchCategory", {
        category: "popular",
        page
      });
    }
  },

  computed: {
    results() {
      return this.$store.getters["person/getCategories"]("popular");
    },
    totalResults() {
      return this.results.type === "movie" ? "movie" : "tv";
    }
  }
};
</script>
