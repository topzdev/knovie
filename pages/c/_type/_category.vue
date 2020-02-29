<template>
  <SearchResult :results="results" :type="$route.params.type">
    <div class="search__filter">
      <div class="container">
        <div class="row">
          <div class="col py-0">
            <h1 class="heading--primary">
              <span class="search__query" v-text="parseCategory" />
              {{ resultType }}
            </h1>
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
  </SearchResult>
</template>

<script>
import SearchResult from "@/components/search/SearchResult";
import numeral from "numeral";
import seoPage from "@/utils/seoPage";

export default {
  head() {
    return seoPage("Category", "List of movies and TV Show by categories");
  },
  data() {
    return {
      type: "TV Shows"
    };
  },
  async fetch({ store, params, query }) {
    const { type, category } = params;

    await store.dispatch(type + "/fetchCategory", {
      category: category,
      page: query.page ? query.page : 1
    });
  },
  components: {
    SearchResult
  },
  watch: {
    $route() {
      const { params, query } = this.$route;

      this.$store.dispatch(params.type + "/fetchCategory", {
        category: params.category,
        page: query.page ? query.page : 1
      });
    }
  },
  computed: {
    results() {
      const { type, category } = this.$route.params;
      return this.$store.getters[type + "/getCategories"](category);
    },
    parseCategory() {
      let { category } = this.$route.params;
      return category
        .replace("_", " ")
        .toLowerCase()
        .split(" ")
        .map(function(word) {
          return word.replace(word[0], word[0].toUpperCase());
        })
        .join(" ");
    },
    resultType() {
      return this.$route.params.type === "movie" ? "Movies" : "TV Shows";
    },
    totalResults() {
      return numeral(this.results.total_results).format("0,0");
    }
  }
};
</script>

<style></style>
