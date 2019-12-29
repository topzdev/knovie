<template>
  <div class="navbar__search">
    <input
      type="text"
      v-model="searchQuery"
      class="inp inp--search"
      aria-label="Search movie"
      placeholder="Search movie or tv show"
      v-on:keyup.enter="onSearch"
    />
    <nuxt-link :to="'/search/' + searchQuery" class="btn btn--icon">
      <v-icon size="30">{{ icons.magnify }}</v-icon>
    </nuxt-link>
  </div>
</template>

<script>
import { mdiMagnify } from "@mdi/js";
export default {
  data() {
    return {
      searchQuery: "",
      icons: {
        magnify: mdiMagnify
      }
    };
  },
  methods: {
    onSearch() {
      this.$router.push({ path: "/search/" + this.searchQuery });
    }
  }
};
</script>

<style></style>
