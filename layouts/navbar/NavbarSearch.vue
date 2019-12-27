<template>
  <div class="navbar__search ml-auto">
    <input
      type="text"
      class="inp inp--search"
      aria-label="search"
      placeholder="Search movie or tv show"
    />
    <button class="btn btn--icon">
      <v-icon size="30">{{icons.magnify}}</v-icon>
    </button>
  </div>
</template>

<script>
import { mdiMagnify } from "@mdi/js";
export default {
  data() {
    return {
      icons: {
        magnify: mdiMagnify
      }
    };
  }
};
</script>

<style>
</style>