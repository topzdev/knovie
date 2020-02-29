<template>
  <div class="movie__info">
    <div class="row">
      <div class="col-lg-12 col-sm-4 col-md-4 col-6 p-0 mb-1 pr-lg-0 pr-1 mb-lg-0">
        <template v-if="info.created_by.length > 0">
          <vue-icon class="movie__icon" :svg="icons.director" />
          <h1 class="heading--secondary mb-1">Creator</h1>
          <ul class="movie__info-list">
            <li>
              <div class="card--small">
                <nuxt-link
                  :to="`/people/${info.created_by[0].credit_id}`"
                  class="card--small__image"
                >
                  <lazy-img
                    :path="info.created_by[0].profile_path"
                    size="w185"
                    alt="Movie Director"
                    class="fit-image"
                    draggable="false"
                  />
                </nuxt-link>
                <div class="card--small__description">
                  <nuxt-link
                    :to="`/people/${info.created_by[0].credit_id}`"
                  >{{ info.created_by[0].name }}</nuxt-link>
                </div>
              </div>
            </li>
          </ul>
        </template>
      </div>

      <div class="col-lg-12 col-sm-4 col-md-4 col-6 p-0 mb-1 pr-lg-0 pr-1 mb-lg-0">
        <vue-icon class="movie__icon" :svg="icons.network" />
        <h1 class="heading--secondary mb-1">Network</h1>
        <ul class="movie__info-list">
          <li v-for="net in info.networks" :key="net.id" :title="net.name">
            <lazy-img
              :path="net.logo_path"
              size="w300"
              :alt="net.name"
              class="movie__logo"
              draggable="false"
            />
          </li>
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
        <h1 class="heading--secondary mb-1">First Aired Date</h1>
        <ul class="movie__info-list">
          <li>
            <p class="paragraph--primary">{{ dayjs(info.first_air_date).format("MMMM D, YYYY") }}</p>
          </li>
        </ul>
      </div>

      <div class="col-lg-12 col-sm-4 col-md-4 col-6 p-0 mb-1 pr-lg-0 pr-1 mb-lg-0">
        <vue-icon class="movie__icon" :svg="icons.last_aired" />
        <h1 class="heading--secondary mb-1">Last Aired Date</h1>
        <ul class="movie__info-list">
          <li>
            <p class="paragraph--primary">{{ dayjs(info.last_air_date).format("MMMM D, YYYY") }}</p>
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
        <vue-icon class="movie__icon" :svg="icons.type" />
        <h1 class="heading--secondary mb-1">Type</h1>
        <ul class="movie__info-list">
          <li>
            <p class="paragraph--primary" v-text="info.type"></p>
          </li>
        </ul>
      </div>

      <div class="col-lg-12 col-sm-4 col-md-4 col-6 p-0 mb-1 pr-lg-0 pr-1 mb-lg-0">
        <vue-icon class="movie__icon" :svg="icons.season" />
        <h1 class="heading--secondary mb-1">Number of Season</h1>
        <ul class="movie__info-list">
          <li>
            <p class="paragraph--primary" v-text="info.number_of_seasons" />
          </li>
        </ul>
      </div>

      <div class="col-lg-12 col-sm-4 col-md-4 col-6 p-0 mb-1 pr-lg-0 pr-1 mb-lg-0">
        <vue-icon class="movie__icon" :svg="icons.episodes" />
        <h1 class="heading--secondary mb-1">Number of Episodes</h1>
        <ul class="movie__info-list">
          <li>
            <p class="paragraph--primary" v-text="info.number_of_episodes" />
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
import SocialButton from "@/components/button/SocialButton";
import {
  mdiAccountTie,
  mdiCalendarRange,
  mdiCardBulletedSettingsOutline,
  mdiCheckDecagram,
  mdiDomain,
  mdiScriptTextOutline,
  mdiCalendarArrowLeft,
  mdiAccessPointNetwork,
  mdiTelevisionClean,
  mdiTelevisionGuide
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
        company: mdiDomain,
        type: mdiScriptTextOutline,
        network: mdiAccessPointNetwork,
        last_aired: mdiCalendarArrowLeft,
        season: mdiTelevisionClean,
        episodes: mdiTelevisionGuide
      }
    };
  },
  components: { SocialButton },
  methods: {
    dayjs,
    numeral,
    imagePath
  },

  computed: {}
};
</script>

<style></style>
