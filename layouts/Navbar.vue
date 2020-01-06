<template>
  <div
    class="navbar"
    :class="{ 'navbar--fixed': fixedNavbar, 'navbar--hidden': hiddenNav }"
    id="scrollhere"
  >
    <div class="container py-0">
      <div class="navbar__nav">
        <nuxt-link to="/" class="navbar__brand">
          <img
            src="~/assets/img/knovie-logo.png"
            alt="Knovie Logo"
            draggable="false"
          />
        </nuxt-link>

        <ul class="navbar__list navbar-preview__list ml-auto">
          <li class="navbar__item navbar-preview__item">
            <nuxt-link
              to="/"
              class="navbar__link navbar-preview__link"
              aria-label="Movie"
              >Movie</nuxt-link
            >
          </li>
          <li class="navbar__item navbar-preview__item">
            <nuxt-link
              to="/tv"
              class="navbar__link navbar-preview__link"
              aria-label="List of tv shows"
              title="See list of tv shows"
              >TV Shows</nuxt-link
            >
          </li>
          <li class="navbar__item navbar-preview__item">
            <nuxt-link
              to="/person"
              class="navbar__link navbar-preview__link"
              aria-label="List of person"
              title="See list of people in film industry"
              >Person</nuxt-link
            >
          </li>
          <li class="navbar__item navbar-preview__item">
            <nuxt-link
              to="/discover"
              class="navbar__link navbar-preview__link"
              aria-label="Discover movies"
              title="Discover and search movies or tv shows "
              >Discover</nuxt-link
            >
          </li>
          <li class="navbar__item navbar-preview__item">
            <nuxt-link
              to="/liked"
              class="navbar__link navbar-preview__link"
              aria-label="Movie you liked"
              title="Movie you like"
              >Liked</nuxt-link
            >
          </li>
        </ul>

        <NavbarSearch />
        <DarkModeButton />
      </div>
    </div>
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
        this.hiddenNav = false;
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
