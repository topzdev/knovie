<template>
  <div class="movie__info">
    <!-- Director -->
    <h1 class="heading--secondary mb-1">Director</h1>
    <ul class="movie__info-list mb-2">
      <li>
        <div class="card--small">
          <nuxt-link to="/" class="card--small__image">
            <img src="../../assets/img/sample-director.jpg" alt class="fit-image" draggable="false" />
          </nuxt-link>
          <div class="card--small__description">
            <nuxt-link to="/">Christopher Nolan</nuxt-link>
          </div>
        </div>
      </li>
    </ul>

    <h1 class="heading--secondary mb-1">Status</h1>
    <ul class="movie__info-list mb-3">
      <li>
        <p class="paragraph--primary">Released</p>
      </li>
    </ul>

    <h1 class="heading--secondary mb-1">Release Date</h1>
    <ul class="movie__info-list mb-3">
      <li>
        <p class="paragraph--primary">April 28, 2019</p>
      </li>
    </ul>

    <h1 class="heading--secondary mb-1">Production Countries</h1>
    <ul class="movie__info-list mb-3">
      <li>
        <p class="paragraph--primary">United State of America</p>
      </li>
    </ul>

    <h1 class="heading--secondary mb-1">Spoken Language</h1>
    <ul class="movie__info-list mb-3">
      <li>
        <p class="paragraph--primary">English</p>
      </li>
    </ul>

    <h1 class="heading--secondary mb-1">Budget</h1>
    <ul class="movie__info-list mb-3">
      <li>
        <p class="paragraph--primary">$200,000,000</p>
      </li>
    </ul>

    <h1 class="heading--secondary mb-1">Revenue</h1>
    <ul class="movie__info-list mb-3">
      <li>
        <p class="paragraph--primary">$2,356,000,000</p>
      </li>
    </ul>

    <h1 class="heading--secondary mb-1">Runtime</h1>
    <ul class="movie__info-list mb-3">
      <li>
        <p class="paragraph--primary">3hr 1min</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>