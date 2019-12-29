<template>
  <SearchResult :results="getResults">
    <div class="search__filter">
      <v-container>
        <v-row>
          <v-col class="py-0">
            <h1 class="heading--primary">
              Discover
              <span class="search__query" v-text="type" />
            </h1>
            <h3
              class="search__count"
              aria-label="Search result count"
              v-text="numeral(getResults.total_results).format('0,0')"
              title="total results"
            />
          </v-col>

          <v-col class="search__selects ml-auto">
            <v-row class="search__sorter">
              <v-col cols="3" class="py-0">
                <v-select v-model="filter.year_value" :items="getYears" label="Year"></v-select>
              </v-col>
              <v-col cols="4" class="py-0">
                <v-select
                  v-model="filter.sort_value"
                  :items="getSortBy"
                  item-text="name"
                  item-value="id"
                  label="Sort by"
                ></v-select>
              </v-col>
              <v-col cols="4" class="py-0">
                <v-select
                  v-model="filter.genre_value"
                  :items="getGenre"
                  item-text="name"
                  item-value="id"
                  label="Genre"
                ></v-select>
              </v-col>
              <v-col class="p-0 d-flex pt-1 align-items-center justify-content-center">
                <button class="btn--icon" @click="filterToggle = !filterToggle">
                  <v-icon size="30">{{filterToggle ? icons.filter : icons.filterOpen}}</v-icon>
                </button>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </SearchResult>
</template>

<script>
import SearchResult from "@/components/search/SearchResult";
import { mdiFilter, mdiFilterOutline } from "@mdi/js";
import numeral from "numeral";
export default {
  async fetch({ store }) {
    await store.dispatch("fetchRecommend", {
      year_value: new Date().getFullYear(),
      sort_value: "popularity.desc",
      genre_value: "",
      page: 1
    });
  },
  data() {
    return {
      type: "Movies",
      filter: {
        year_value: "All",
        sort_value: "popularity.desc",
        genre_value: -1,
        page: 1
      },
      icons: {
        filter: mdiFilterOutline,
        filterOpen: mdiFilter
      },
      filterToggle: false
    };
  },
  components: {
    SearchResult
  },
  methods: {
    numeral,
    fetchResults(page) {
      const { year_value, sort_value, genre_value } = this.filter;
      this.$store.dispatch("fetchRecommend", {
        year_value,
        sort_value,
        genre_value,
        page
      });
    }
  },
  computed: {
    getResults: function() {
      return this.$store.getters.getRecommend;
    },
    getYears: function() {
      return this.$store.getters.getYears;
    },
    getGenre: function() {
      return this.$store.getters.getGenres;
    },
    getSortBy: function() {
      return this.$store.getters.getSortBy;
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
        console.log("Filter observed");
        this.fetchResults(this.page);
      },
      deep: true
    }
  },
  created() {
    const { year_value, sort_value, genre_value, page } = this.filter;
    this.$store.dispatch("fetchRecommend", {
      year_value,
      sort_value,
      genre_value,
      page
    });
  }
};
</script>

<style>
</style>