<template>
  <div>
    <div class="row">
      <div class="col">
        <h1 class="heading--primary">Episodes</h1>
      </div>
      <div class="col-12" v-for="eps in episodes" :key="eps.id">
        <EpisodeCard :episode="eps" />
      </div>
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

<style>
</style>