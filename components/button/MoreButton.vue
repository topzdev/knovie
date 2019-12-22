<template>
  <nuxt-link to class="btn btn--more d-block">
    View All {{ title }}
    <span>&rharu;</span>
  </nuxt-link>
</template>

<script>
export default {
  props: ["title"]
};
</script>