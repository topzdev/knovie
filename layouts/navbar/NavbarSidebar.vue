<template>
  <div class="navbar__mobile">
    <button class="navbar__menu" aria-label="show sidebar" @click="show = true">
      <vue-icon size="40" :svg="icons.menu" />
    </button>
    <div class="navbar__backdrop" v-show="show" @click="show = false" />
    <ul
      class="navbar__sidebar"
      @click="show = false"
      :class="{ 'navbar__sidebar-show': show }"
    >
      <li>
        <nuxt-link to="/" class="navbar__brand">
          <img
            src="~/assets/img/knovie-logo.png"
            alt="Knovie Logo"
            draggable="false"
            loading="lazy"
            height="50"
            width="46"
          />
        </nuxt-link>
      </li>
      <li class="navbar__sidebar-item">
        <nuxt-link
          to="/"
          class="navbar__link navbar-preview__link"
          aria-label="Movie"
          >Movie</nuxt-link
        >
      </li>
      <li class="navbar__sidebar-item">
        <nuxt-link
          to="/tv"
          class="navbar__link navbar-preview__link"
          aria-label="List of tv shows"
          title="See list of tv shows"
          >TV Shows</nuxt-link
        >
      </li>
      <li class="navbar__sidebar-item">
        <nuxt-link
          to="/person"
          class="navbar__link navbar-preview__link"
          aria-label="List of person"
          title="See list of people in film industry"
          >Person</nuxt-link
        >
      </li>
      <li class="navbar__sidebar-item">
        <nuxt-link
          to="/discover"
          class="navbar__link navbar-preview__link"
          aria-label="Discover movies"
          title="Discover and search movies or tv shows "
          >Discover</nuxt-link
        >
      </li>
      <li class="navbar__sidebar-item">
        <nuxt-link
          to="/liked"
          class="navbar__link navbar-preview__link"
          aria-label="Movie you liked"
          title="Movie you like"
          >Liked</nuxt-link
        >
      </li>
      <li class="navbar__sidebar-item">
        <div class="navbar__link navbar-preview__link">
          <DarkModeButton class="mr-1" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mdiMenu } from "@mdi/js";
import DarkModeButton from "../DarkModeButton";
export default {
  data() {
    return {
      show: false,
      icons: {
        menu: mdiMenu
      }
    };
  },
  components: {
    DarkModeButton
  },
  watch: {
    show() {
      if (this.show) {
        document.documentElement.style.overflowY = "hidden";
        return;
      }
      document.documentElement.style.overflowY = "auto";
    }
  }
};
</script>

<style></style>
