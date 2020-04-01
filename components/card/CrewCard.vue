<template>
  <div class="card--secondary">
    <nuxt-link :to="'/people/' + crew.credit_id" class="card--secondary__img">
      <lazy-img
        :path="crew.profile_path"
        size="w185"
        class="fit-image"
        :alt="`${crew.name} as ${crew.department} department`"
        :title="`${crew.name} as ${crew.department} department`"
        aria-label="Crew profiles"
      />
    </nuxt-link>

    <div class="card--secondary__content">
      <nuxt-link :to="'/people/' + crew.credit_id" class="card--secondary__name">{{ crew.name }}</nuxt-link>
      <p class="card--secondary__film-name" v-if="crew.job">{{ crew.job }}</p>
    </div>
  </div>
</template>

<script>
import imagePath from "~/utils/imagePath";
export default {
  props: ["crew"],
  methods: {
    imagePath
  }
};
</script>

<style></style>
