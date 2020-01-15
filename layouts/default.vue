<template >
  <div>
    <navbar />
    <nuxt />
    <scroll-button />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./Navbar";
import ScrollButton from "./ScrollTopButton";
import Footer from "./footer";
export default {
  components: {
    Footer,
    Navbar,
    ScrollButton
  }
};
</script>
