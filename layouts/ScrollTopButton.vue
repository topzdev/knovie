<template>
  <button
    v-scroll-to="'#scrollhere'"
    aria-label="scroll up"
    class="btn btn--scroll-top"
    :class="{ 'btn--scroll-top--shrink': !showScrollButton }"
  >
    <vue-icon size="40" :svg="icons.chevronTop" />
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
