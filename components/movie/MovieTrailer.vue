<template>
  <iframe
    allowfullscreen
    frameborder="0"
    :src="`https://www.youtube.com/embed/${trailer}?autoplay=${show ? 1 : 0}`"
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