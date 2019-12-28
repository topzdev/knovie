<template>
  <div class="navbar-preview">
    <v-container class="p-0">
      <ul class="navbar-preview__list">
        <li class="navbar-preview__item">
          <nuxt-link :to="`/movie/${$route.params.id}`" class="navbar-preview__link">Main</nuxt-link>
        </li>
        <li class="navbar-preview__item">
          <nuxt-link :to="`/movie/cast/${$route.params.id}`" class="navbar-preview__link">Cast</nuxt-link>
        </li>
        <li class="navbar-preview__item">
          <nuxt-link :to="`/movie/gallery/${$route.params.id}`" class="navbar-preview__link">Gallery</nuxt-link>
        </li>
        <li class="navbar-preview__item">
          <nuxt-link :to="`/movie/reviews/${$route.params.id}`" class="navbar-preview__link">Reviews</nuxt-link>
        </li>
      </ul>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>