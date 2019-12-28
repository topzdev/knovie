<template>
  <nuxt-link :to="url" class="btn btn--more d-block">
    View All {{ title }}
    <span>&rharu;</span>
  </nuxt-link>
</template>

<script>
export default {
  props: ["title", "url"]
};
</script>