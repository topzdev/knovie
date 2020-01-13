<template>
  <div class="navbar-preview">
    <div class="container p-0">
      <ul class="navbar-preview__list">
        <li class="navbar-preview__item">
          <nuxt-link
            :to="{ name: name, params: { id: $route.params.id } }"
            class="navbar-preview__link"
          >Main</nuxt-link>
        </li>
        <li v-if="season" class="navbar-preview__item">
          <nuxt-link
            :to="{ name: name + '-season', params: { id: $route.params.id } }"
            class="navbar-preview__link"
          >Season</nuxt-link>
        </li>
        <li class="navbar-preview__item">
          <nuxt-link
            :to="{ name: name + '-cast', params: { id: $route.params.id } }"
            class="navbar-preview__link"
          >Cast</nuxt-link>
        </li>
        <li class="navbar-preview__item">
          <nuxt-link
            :to="{ name: name + '-gallery', params: { id: $route.params.id } }"
            class="navbar-preview__link"
          >Gallery</nuxt-link>
        </li>
        <li class="navbar-preview__item">
          <nuxt-link
            :to="{ name: name + '-reviews', params: { id: $route.params.id } }"
            class="navbar-preview__link"
          >Reviews</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "season"]
};
</script>

<style></style>
