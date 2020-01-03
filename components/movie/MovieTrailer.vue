<template>
  <iframe
    allowfullscreen
    frameborder="0"
    v-if="trailer.results.length != 0"
    :src="`https://www.youtube.com/embed/${trailer.results[0].key}?autoplay=${show ? 1 : 0}`"
    class="movie__trailer"
  />
</template>

<script>
export default {
  props: ["trailer", "show"]
};
</script>

<style>
</style>