<template>
  <div class="movie__info">
    <!-- Director -->
    <div class="row">
      <div class="col-12 p-0 movie__info-header">
        <h1 class="heading--primary mb-3">Movie Facts</h1>
      </div>

      <div class="col-lg-12 col-sm-4 col-md-4 col-6 p-0 mb-1 pr-lg-0 pr-1 mb-lg-0">
        <div v-if="director ? true : false">
          <vue-icon class="movie__icon" :svg="icons.director" />
          <h1 class="heading--secondary mb-1">Director</h1>
          <ul class="movie__info-list">
            <li>
              <div class="card--small">
                <nuxt-link
                  :to="{
                    name: 'view-person-id',
                    params: { id: parseLink(director.name, director.id) }
                  }"
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
                  <nuxt-link :to="`/people/${director.credit_id}`">{{ director.name }}</nuxt-link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-lg-12 col-sm-4 col-md-4 col-6 p-0 mb-1 pr-lg-0 pr-1 mb-lg-0">
        <vue-icon class="movie__icon" :svg="icons.rated" />
        <h1 class="heading--secondary mb-1">Rated</h1>
        <ul class="movie__info-list">
          <p
            class="badge badge__rated"
            :class="`badge__rated--${info.rated.toLowerCase()}`"
            v-text="info.rated"
          />
        </ul>
      </div>

      <div class="col-lg-12 col-sm-4 col-md-4 col-6 p-0 mb-1 pr-lg-0 pr-1 mb-lg-0">
        <vue-icon class="movie__icon" :svg="icons.status" />
        <h1 class="heading--secondary mb-1">Status</h1>
        <ul class="movie__info-list">
          <li>
            <p class="paragraph--primary">{{ info.status }}</p>
          </li>
        </ul>
      </div>

      <div class="col-lg-12 col-sm-4 col-md-4 col-6 p-0 mb-1 pr-lg-0 pr-1 mb-lg-0">
        <vue-icon class="movie__icon" :svg="icons.release_date" />
        <h1 class="heading--secondary mb-1">Release Date</h1>
        <ul class="movie__info-list">
          <li>
            <p class="paragraph--primary">{{ dayjs(info.release_date).format("MMMM D, YYYY") }}</p>
          </li>
        </ul>
      </div>

      <div class="col-lg-12 col-sm-4 col-md-4 col-6 p-0 mb-1 pr-lg-0 pr-1 mb-lg-0">
        <vue-icon class="movie__icon" :svg="icons.company" />
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
      </div>

      <div class="col-lg-12 col-sm-4 col-md-4 col-6 p-0 mb-1 pr-lg-0 pr-1 mb-lg-0">
        <vue-icon class="movie__icon" :svg="icons.country" />
        <h1 class="heading--secondary mb-1">Production Countries</h1>
        <ul class="movie__info-list">
          <li v-for="countries in info.production_countries" :key="countries.iso_3166_1">
            <p class="paragraph--primary">{{ countries.name }}</p>
          </li>
        </ul>
      </div>

      <div class="col-lg-12 col-sm-4 col-md-4 col-6 p-0 mb-1 pr-lg-0 pr-1 mb-lg-0">
        <vue-icon class="movie__icon" :svg="icons.language" />
        <h1 class="heading--secondary mb-1">Spoken Language</h1>
        <ul class="movie__info-list">
          <li v-for="language in info.spoken_languages" :key="language.iso_639_1">
            <p class="paragraph--primary">{{ language.name }}</p>
          </li>
        </ul>
      </div>

      <div class="col-lg-12 col-sm-4 col-md-4 col-6 p-0 mb-1 pr-lg-0 pr-1 mb-lg-0">
        <vue-icon class="movie__icon" :svg="icons.budget" />
        <h1 class="heading--secondary mb-1">Budget</h1>
        <ul class="movie__info-list">
          <li>
            <p class="paragraph--primary">${{ numeral(info.budget).format("0,0.00") }}</p>
          </li>
        </ul>
      </div>

      <div class="col-lg-12 col-sm-4 col-md-4 col-6 p-0 mb-1 pr-lg-0 pr-1 mb-lg-0">
        <div>
          <vue-icon class="movie__icon" :svg="icons.revenue" />
          <h1 class="heading--secondary mb-1">Revenue</h1>
          <ul class="movie__info-list">
            <li>
              <p
                class="paragraph--primary"
                v-text="
                  info.revenue
                    ? '$' + numeral(info.revenue).format('0,0.00')
                    : '-'
                "
              />
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-12 col-sm-4 col-md-4 col-6 p-0 mb-1 pr-lg-0 pr-1 mb-lg-0">
        <vue-icon class="movie__icon" :svg="icons.runtime" />
        <h1 class="heading--secondary mb-1">Runtime</h1>
        <ul class="movie__info-list">
          <li>
            <p class="paragraph--primary">{{ parseFloat(info.runtime / 60).toFixed(2) }} hrs</p>
          </li>
        </ul>
      </div>

      <div class="col-lg-12 p-0 mb-2 pr-lg-0 pr-1 mb-lg-1">
        <h1 class="heading--secondary mb-1">Links</h1>
        <SocialButton :links="info.external_id" type="title" :web="info.homepage" />
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import numeral from "numeral";
import imagePath from "@/utils/imagePath";
import parseLink from "@/utils/parseLink";
import findProperties from "@/utils/findProperties";
import SocialButton from "@/components/button/SocialButton";
import {
  mdiAccountTie,
  mdiFlag,
  mdiCalendarRange,
  mdiCurrencyUsd,
  mdiTranslate,
  mdiCardBulletedSettingsOutline,
  mdiCashMultiple,
  mdiAvTimer,
  mdiCheckDecagram,
  mdiDomain
} from "@mdi/js";
export default {
  props: ["info"],
  data() {
    return {
      icons: {
        director: mdiAccountTie,
        rated: mdiCheckDecagram,
        status: mdiCardBulletedSettingsOutline,
        release_date: mdiCalendarRange,
        country: mdiFlag,
        language: mdiTranslate,
        budget: mdiCurrencyUsd,
        revenue: mdiCashMultiple,
        runtime: mdiAvTimer,
        company: mdiDomain
      }
    };
  },
  methods: {
    dayjs,
    numeral,
    imagePath,
    parseLink
  },
  components: { SocialButton },
  computed: {
    director: function() {
      return findProperties(this.$props.info.credits.crew, "job", "Director");
    }
  }
};
</script>

<style></style>
