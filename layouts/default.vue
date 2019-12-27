<template>
  <div>
    <Navbar />
    <nuxt />
    <ScrollButton />
  </div>
</template>

<script>
import Navbar from "./Navbar";
import ScrollButton from "./ScrollTopButton";
export default {
  components: {
    Navbar,
    ScrollButton
  }
};
</script>
