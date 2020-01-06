<template>
  <div class="navbar-preview">
    <div class="p-0">
      <ul class="navbar-preview__list">
        <li class="navbar-preview__item">
          <nuxt-link
            :to="{ name, params: { id: $route.params.id } }"
            class="navbar-preview__link"
            >Main</nuxt-link
          >
        </li>
        <li class="navbar-preview__item">
          <nuxt-link
            :to="{ name: name + '-cast', params: { id: $route.params.id } }"
            class="navbar-preview__link"
            >Cast</nuxt-link
          >
        </li>
        <li class="navbar-preview__item">
          <nuxt-link
            :to="{ name: name + '-gallery', params: { id: $route.params.id } }"
            class="navbar-preview__link"
            >Gallery</nuxt-link
          >
        </li>
        <li class="navbar-preview__item">
          <nuxt-link
            :to="{ name: name + '-reviews', params: { id: $route.params.id } }"
            class="navbar-preview__link"
            >Reviews</nuxt-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name"]
};
</script>

<style></style>
