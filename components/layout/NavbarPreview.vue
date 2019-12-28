<template>
  <div class="navbar-preview">
    <v-container class="p-0">
      <ul class="navbar-preview__list">
        <li class="navbar-preview__item">
          <nuxt-link to="/movie/cast" class="navbar-preview__link">Cast</nuxt-link>
        </li>
        <li class="navbar-preview__item">
          <nuxt-link to="/movie/media" class="navbar-preview__link">Media</nuxt-link>
        </li>
        <li class="navbar-preview__item">
          <nuxt-link to="/movie/reviews" class="navbar-preview__link">Reviews</nuxt-link>
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