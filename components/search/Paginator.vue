<template>
  <v-pagination
    v-model="currentPage"
    :length="totalPage"
    :value="currentPage"
    :total-visible="totalVisible"
    prev-icon="mdi-chevron-left"
    next-icon="mdi-chevron-right"
  ></v-pagination>
</template>

<script>
export default {
  props: ["totalPage"],
  data() {
    return {
      currentPage: 1,
      totalVisible: 10,
      totalResult: 0
    };
  },
  watch: {
    currentPage() {
      this.$router.push({
        path: this.$route.path,
        query: { page: this.currentPage }
      });
    }
  },

  created() {
    console.log(this.$route.query);
    this.currentPage = parseInt(this.$route.query.page);
  }
};
</script>

<style></style>
