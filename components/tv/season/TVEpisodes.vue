<template>
  <div class="row">
    <div class="col-12">
      <h1 class="heading--primary mb-3">Episodes</h1>
    </div>
    <div class="col-12 mb-2" v-for="eps in episodes" :key="eps.id">
      <EpisodeCard :episode="eps" />
    </div>
  </div>
</template>

<script>
import EpisodeCard from "@/components/card/EpisodeCard";
export default {
  components: {
    EpisodeCard
  },
  props: ["episodes"]
};
</script>

<style></style>
