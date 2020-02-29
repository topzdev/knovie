<template>
  <iframe
    allowfullscreen
    frameborder="0"
    v-if="trailer.results.length != 0"
    :src="trailerUrl"
    class="movie__trailer"
  />
</template>

<script>
export default {
  props: ["trailer", "show"],
  computed: {
    trailerUrl() {
      return `https://www.youtube.com/embed/${
        this.trailer.results[0].key
      }?autoplay=${this.show ? 1 : 0}`;
    }
  }
};
</script>

<style>
</style>