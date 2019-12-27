<template>
  <div
    class="navbar"
    :class="{ 'navbar--fixed': fixedNavbar, 'navbar--hidden': hiddenNav }"
    id="scrollhere"
  >
    <v-container>
      <div class="navbar__nav">
        <nuxt-link to="/" class="navbar__brand">
          <img
            src="~/assets/img/knovie-logo.png"
            alt="Knovie Logo"
            draggable="false"
          />
        </nuxt-link>

        <NavbarSearch />
        <DarkModeButton />
      </div>
    </v-container>
  </div>
</template>

<script>
import NavbarSearch from "./navbar/NavbarSearch";
import DarkModeButton from "./DarkModeButton";
export default {
  data() {
    return {
      fixedNavbar: false,
      hiddenNav: false,
      lastScrollPosition: 0
    };
  },
  components: {
    NavbarSearch,
    DarkModeButton
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollPosition > window.innerHeight) {
        this.fixedNavbar = true;

        this.hiddenNav =
          currentScrollPosition > this.lastScrollPosition ? true : false;
      } else {
        this.fixedNavbar = false;
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
