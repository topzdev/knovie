<template>
  <div class="movie__info">
    <!-- Director -->
    <h1 class="heading--secondary mb-1">Director</h1>
    <ul class="movie__info-list mb-2">
      <li>
        <div class="card--small">
          <nuxt-link to="/" class="card--small__image">
            <img
              src="../../assets/img/sample-director.jpg"
              alt
              class="fit-image"
              draggable="false"
            />
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
        <p class="paragraph--primary">{{ info.status }}</p>
      </li>
    </ul>

    <h1 class="heading--secondary mb-1">Release Date</h1>
    <ul class="movie__info-list mb-3">
      <li>
        <p class="paragraph--primary">
          {{ moment(info.release_date).format("MMMM Do YYYY") }}
        </p>
      </li>
    </ul>

    <h1 class="heading--secondary mb-1">Production Countries</h1>
    <ul class="movie__info-list mb-3">
      <li
        v-for="countries in info.production_countries"
        :key="countries.iso_3166_1"
      >
        <p class="paragraph--primary">{{ countries.name }}</p>
      </li>
    </ul>

    <h1 class="heading--secondary mb-1">Spoken Language</h1>
    <ul class="movie__info-list mb-3">
      <li v-for="language in info.spoken_languages" :key="language.iso_639_1">
        <p class="paragraph--primary">{{ language.name }}</p>
      </li>
    </ul>

    <h1 class="heading--secondary mb-1">Budget</h1>
    <ul class="movie__info-list mb-3">
      <li>
        <p class="paragraph--primary">
          ${{ numeral(info.budget).format("0,0.00") }}
        </p>
      </li>
    </ul>
    <div v-if="info.revenue">
      <h1 class="heading--secondary mb-1">Revenue</h1>
      <ul class="movie__info-list mb-3">
        <li>
          <p class="paragraph--primary">
            ${{ numeral(info.revenue).format("0,0.00") }}
          </p>
        </li>
      </ul>
    </div>

    <h1 class="heading--secondary mb-1">Runtime</h1>
    <ul class="movie__info-list mb-3">
      <li>
        <p class="paragraph--primary">
          {{ parseFloat(info.runtime / 60).toFixed(2) }} hrs
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from "moment";
import numeral from "numeral";
export default {
  props: ["info"],
  methods: {
    moment,
    numeral
  }
};
</script>

<style></style>
