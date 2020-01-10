<template>
  <div class="row">
    <div class="col-12">
      <h2 class="heading--primary">Cast</h2>

      <div class="row">
        <div class="col col-lg-3 mb-1" v-for="cast in credits.cast" :key="cast.id">
          <CastCard :cast="cast" />
        </div>
      </div>
    </div>

    <div class="col-12">
      <h2 class="heading--primary">Crew</h2>

      <div class="row">
        <div class="col col-lg-3 mb-1" v-for="crew in credits.crew" :key="crew.id">
          <CrewCard :crew="crew" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CastCard from "@/components/card/CastCard";
import CrewCard from "@/components/card/CrewCard";
export default {
  props: ["credits"],
  components: {
    CastCard,
    CrewCard
  }
};
</script>

<style>
</style>