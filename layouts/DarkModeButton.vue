<template>
  <button class="btn--icon" @click="toggle = !toggle" :aria-label="`Toggle ${isMode} mode`">
    <vue-icon size="30" :svg="toggle ? icons.dark : icons.light" />
  </button>
</template>

<script>
import { mdiBrightness7, mdiBrightness4 } from "@mdi/js";
export default {
  data() {
    return {
      toggle: true,
      icons: {
        dark: mdiBrightness4,
        light: mdiBrightness7
      }
    };
  },
  computed: {
    isMode() {
      return this.toggle ? "dark" : "light";
    }
  },
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: `/${this.isMode}.css`
        }
      ]
    };
  }
};
</script>

<style></style>
