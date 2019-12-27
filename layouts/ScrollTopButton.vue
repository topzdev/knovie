<template>
  <button
    v-scroll-to="'#scrollhere'"
    class="btn btn--scroll-top"
    :class="{ 'btn--scroll-top--shrink': !showScrollButton }"
  >
    <v-icon size="40">{{ icons.chevronTop }}</v-icon>
  </button>
</template>

<script>
import { mdiChevronUp } from "@mdi/js";
export default {
  data() {
    return {
      icons: {
        chevronTop: mdiChevronUp
      },
      showScrollButton: false,
      lastScrollPosition: 0
    };
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      console.log(currentScrollPosition);
      if (currentScrollPosition > window.innerHeight) {
        this.showScrollButton = true;
      } else {
        this.showScrollButton = false;
      }
      this.lastScrollPosition = currentScrollPosition;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>
