<template>
  <div class="row">
    <div class="col-12">
      <h2 class="heading--primary">Castdd</h2>

      <div class="row">
        <div
          class="col-4 col-sm-3 col-md-3 col-lg-custom"
          v-for="cast in credits.cast"
          :key="cast.id"
        >
          <CastCard :cast="cast" />
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