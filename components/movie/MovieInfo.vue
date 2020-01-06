<template>
  <div class="movie__info">
    <!-- Director -->
    <div v-if="director ? true : false">
      <h1 class="heading--secondary mb-1">Director</h1>
      <ul class="movie__info-list">
        <li>
          <div class="card--small">
            <nuxt-link
              :to="`/people/${director.credit_id}`"
              class="card--small__image"
            >
              <img
                :src="imagePath(director.profile_path, 'w185')"
                alt="Movie Director"
                class="fit-image"
                draggable="false"
              />
            </nuxt-link>
            <div class="card--small__description">
              <nuxt-link :to="`/people/${director.credit_id}`">{{
                director.name
              }}</nuxt-link>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <h1 class="heading--secondary mb-1">Rated</h1>
    <ul class="movie__info-list">
      <p
        class="badge badge__rated"
        :class="`badge__rated--${info.rated.toLowerCase()}`"
        v-text="info.rated"
      />
    </ul>

    <h1 class="heading--secondary mb-1">Status</h1>
    <ul class="movie__info-list">
      <li>
        <p class="paragraph--primary">{{ info.status }}</p>
      </li>
    </ul>

    <h1 class="heading--secondary mb-1">Release Date</h1>
    <ul class="movie__info-list">
      <li>
        <p class="paragraph--primary">
          {{ dayjs(info.release_date).format("MMMM Do YYYY") }}
        </p>
      </li>
    </ul>

    <h1
      class="heading--secondary mb-1"
      title="production companies"
      aria-label="production companies"
    >
      Production Companies
    </h1>
    <ul class="movie__info-list">
      <li v-for="companies in info.production_companies" :key="companies.id">
        <p
          v-text="companies.name"
          :title="companies.name"
          :aria-label="companies.name"
        ></p>
      </li>
    </ul>

    <h1 class="heading--secondary mb-1">Production Countries</h1>
    <ul class="movie__info-list">
      <li
        v-for="countries in info.production_countries"
        :key="countries.iso_3166_1"
      >
        <p class="paragraph--primary">{{ countries.name }}</p>
      </li>
    </ul>

    <h1 class="heading--secondary mb-1">Spoken Language</h1>
    <ul class="movie__info-list">
      <li v-for="language in info.spoken_languages" :key="language.iso_639_1">
        <p class="paragraph--primary">{{ language.name }}</p>
      </li>
    </ul>

    <h1 class="heading--secondary mb-1">Budget</h1>
    <ul class="movie__info-list">
      <li>
        <p class="paragraph--primary">
          ${{ numeral(info.budget).format("0,0.00") }}
        </p>
      </li>
    </ul>
    <div>
      <h1 class="heading--secondary mb-1">Revenue</h1>
      <ul class="movie__info-list">
        <li>
          <p
            class="paragraph--primary"
            v-text="
              info.revenue ? '$' + numeral(info.revenue).format('0,0.00') : '-'
            "
          />
        </li>
      </ul>
    </div>

    <h1 class="heading--secondary mb-1">Runtime</h1>
    <ul class="movie__info-list">
      <li>
        <p class="paragraph--primary">
          {{ parseFloat(info.runtime / 60).toFixed(2) }} hrs
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import numeral from "numeral";
import imagePath from "@/utils/imagePath";
import { find } from "lodash/core";
export default {
  props: ["info"],
  methods: {
    dayjs,
    numeral,
    imagePath
  },

  computed: {
    director: function() {
      return find(this.$props.info.credits.crew, { job: "Director" });
    }
  }
};
</script>

<style></style>
