<template>
  <!-- <v-pagination
    v-model="currentPage"
    :length="totalPage"
    :value="currentPage"
    :total-visible="visible ? visible : 8"
    prev-icon="mdi-chevron-left"
    next-icon="mdi-chevron-right"
  ></v-pagination>-->
  <div></div>
</template>

<script>
export default {
  props: ["totalPage", "visible"],

  data() {
    return {
      currentPage: 1,
      totalResult: 0
    };
  },
  watch: {
    $route() {
      this.currentPage = parseInt(this.$route.query.page || 1);
    },
    currentPage() {
      this.$router.push({
        path: this.$route.path,
        query: { page: this.currentPage }
      });
    }
  },

  created() {
    console.log(this.$route.query);
    this.currentPage = parseInt(this.$route.query.page || 1);
  }
};
</script>

<style></style>
