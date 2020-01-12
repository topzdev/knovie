<template>
  <button class="btn--icon" @click="toggle = !toggle" aria-label="Toggle Light/Dark Mode">
    <v-icon size="30">{{ toggle ? icons.dark : icons.light }}</v-icon>
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
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: `/${this.toggle ? "dark" : "light"}.css`
        }
      ]
    };
  }
};
</script>

<style></style>
