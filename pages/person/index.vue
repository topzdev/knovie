<template>
  <div>
    <div class="container pt-4 pb-5">
      <Showcase
        title="Latest"
        :result="popular.results"
        type="Person"
        url="/person/popular"
        toShow="40"
      />
    </div>
  </div>
</template>

<script>
import Showcase from "@/components/layout/Showcase";

export default {
  async fetch({ store, data }) {
    await store.dispatch("person/fetchCategory", { category: "popular" });
  },
  components: {
    Showcase
  },
  computed: {
    popular() {
      return this.$store.getters["person/getCategories"]("popular");
    }
  }
};
</script>
