<template>
  <div class="movie__info">
    <template v-if="info.created_by.length > 0">
      <h1 class="heading--secondary mb-1">Creator</h1>
      <ul class="movie__info-list">
        <li>
          <div class="card--small">
            <nuxt-link :to="`/people/${info.created_by[0].credit_id}`" class="card--small__image">
              <img
                :src="imagePath(info.created_by[0].profile_path, 'w185')"
                alt="Movie Director"
                class="fit-image"
                draggable="false"
              />
            </nuxt-link>
            <div class="card--small__description">
              <nuxt-link :to="`/people/${info.created_by[0].credit_id}`">
                {{
                info.created_by[0].name
                }}
              </nuxt-link>
            </div>
          </div>
        </li>
      </ul>
    </template>

    <h1 class="heading--secondary mb-1">Network</h1>
    <ul class="movie__info-list">
      <li v-for="net in info.networks" :key="net.id" :title="net.name">
        <img
          :src="imagePath(net.logo_path, 'w300')"
          :alt="net.name"
          class="movie__logo"
          draggable="false"
        />
      </li>
    </ul>

    <h1 class="heading--secondary mb-1">Status</h1>
    <ul class="movie__info-list">
      <li>
        <p class="paragraph--primary">{{ info.status }}</p>
      </li>
    </ul>

    <h1 class="heading--secondary mb-1">First Aired Date</h1>
    <ul class="movie__info-list">
      <li>
        <p class="paragraph--primary">{{ dayjs(info.first_air_date).format("MMMM Do YYYY") }}</p>
      </li>
    </ul>

    <h1 class="heading--secondary mb-1">Last Aired Date</h1>
    <ul class="movie__info-list">
      <li>
        <p class="paragraph--primary">{{ dayjs(info.last_air_date).format("MMMM Do YYYY") }}</p>
      </li>
    </ul>

    <h1
      class="heading--secondary mb-1"
      title="production companies"
      aria-label="production companies"
    >Production Companies</h1>
    <ul class="movie__info-list">
      <li v-for="companies in info.production_companies" :key="companies.id">
        <p v-text="companies.name" :title="companies.name" :aria-label="companies.name"></p>
      </li>
    </ul>
    <h1 class="heading--secondary mb-1">Type</h1>
    <ul class="movie__info-list">
      <li>
        <p class="paragraph--primary" v-text="info.type"></p>
      </li>
    </ul>

    <h1 class="heading--secondary mb-1">Number of Season</h1>
    <ul class="movie__info-list">
      <li>
        <p class="paragraph--primary" v-text="info.number_of_seasons" />
      </li>
    </ul>
    <h1 class="heading--secondary mb-1">Number of Episodes</h1>
    <ul class="movie__info-list">
      <li>
        <p class="paragraph--primary" v-text="info.number_of_episodes" />
      </li>
    </ul>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import numeral from "numeral";
import imagePath from "@/utils/imagePath";
export default {
  props: ["info"],
  methods: {
    dayjs,
    numeral,
    imagePath
  },

  computed: {}
};
</script>

<style></style>
