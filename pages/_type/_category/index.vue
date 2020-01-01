<template>
  <SearchResult :results="results" :type="$route.params.type">
    <div class="search__filter">
      <v-container>
        <v-row>
          <v-col class="py-0">
            <h1 class="heading--primary">
              <span class="search__query" v-text="parseCategory" />
              {{ $route.params.type === "movie" ? "Movies" : "TV Shows" }}
            </h1>
            <h3
              class="search__count"
              aria-label="Search result count"
              v-text="numeral(results.total_results).format('0,0')"
              title="total results"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </SearchResult>
</template>

<script>
import SearchResult from "@/components/search/SearchResult";
import numeral from "numeral";

export default {
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
  methods: {
    numeral
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
      const { category } = this.$route.params;

      return this._.capitalize(category.replace("_", " "));
    }
  }
};
</script>

<style></style>
