<template>
  <v-app dark>
    <template v-if="error.statusCode === 404">
      <Page404 :title="pageNotFound" />
    </template>

    <template v-else>
      <Page404 :title="otherError" />
    </template>
  </v-app>
</template>

<script>
import Page404 from "./Page404";
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  },
  components: {
    Page404
  },
  data() {
    return {
      pageNotFound: "404 Page Not Found",
      otherError: "An error occurred"
    };
  }
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
