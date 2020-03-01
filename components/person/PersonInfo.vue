<template>
  <div class="person__info mt-4">
    <div class="row">
      <div class="col-6 col-md-4 col-lg-3" v-show="person.known_for_department">
        <vue-icon class="movie__icon" :svg="icons.director" />
        <h1 class="heading--secondary mb-1">Known field</h1>
        <ul class="movie__info-list">
          <li>
            <p class="paragraph--primary" v-text="person.known_for_department" />
          </li>
        </ul>
      </div>

      <div class="col-6 col-md-4 col-lg-3" v-show="total_movie_credits > 0">
        <vue-icon class="movie__icon" :svg="icons.movie" />
        <h1 class="heading--secondary mb-1">Total Movie Credited</h1>
        <ul class="movie__info-list">
          <li>
            <p class="paragraph--primary" v-text="total_movie_credits" />
          </li>
        </ul>
      </div>

      <div class="col-6 col-md-4 col-lg-3" v-show="total_tv_credits > 0">
        <vue-icon class="movie__icon" :svg="icons.tv" />
        <h1 class="heading--secondary mb-1">Total TV Shows Credited</h1>
        <ul class="movie__info-list">
          <li>
            <p class="paragraph--primary" v-text="total_tv_credits" />
          </li>
        </ul>
      </div>

      <div class="col-6 col-md-4 col-lg-3" v-show="person.gender">
        <vue-icon class="movie__icon" :svg="icons.gender" />
        <h1 class="heading--secondary mb-1">Gender</h1>
        <ul class="movie__info-list">
          <li>
            <p class="paragraph--primary" v-text="gender" />
          </li>
        </ul>
      </div>

      <div class="col-6 col-md-4 col-lg-3" v-show="person.place_of_birth">
        <vue-icon class="movie__icon" :svg="icons.place" />
        <h1 class="heading--secondary mb-1">Place of birth</h1>
        <ul class="movie__info-list">
          <li>
            <p class="paragraph--primary" v-text="person.place_of_birth" />
          </li>
        </ul>
      </div>

      <div class="col-6 col-md-4 col-lg-3" v-show="person.birthday">
        <vue-icon class="movie__icon" :svg="icons.director" />
        <h1 class="heading--secondary mb-1">Birthdate</h1>
        <ul class="movie__info-list">
          <li>
            <p class="paragraph--primary" v-text="dayjs(person.birthday).format('MMMM D, YYYY')" />
          </li>
        </ul>
      </div>

      <div class="col-6 col-md-4 col-lg-3" v-show="person.deathday">
        <vue-icon class="movie__icon" :svg="icons.dead" />
        <h1 class="heading--secondary mb-1">Death Date</h1>
        <ul class="movie__info-list">
          <li>
            <p class="paragraph--primary" v-text="dayjs(person.deathday).format('MMMM Do YYYY')" />
          </li>
        </ul>
      </div>

      <div class="col-lg" v-show="person.also_known_as.length > 0">
        <vue-icon class="movie__icon" :svg="icons.known" />
        <h1 class="heading--secondary mb-1">Also known as</h1>
        <ul class="movie__info-list">
          <li v-for="name in person.also_known_as" :key="name">
            <p class="paragraph--primary" v-text="name" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import imagePath from "@/utils/imagePath";
import {
  mdiAccountTie,
  mdiTelevisionClassic,
  mdiFilmstrip,
  mdiGenderMaleFemale,
  mdiCalendar,
  mdiCityVariantOutline,
  mdiAccountSwitch,
  mdiEmoticonDeadOutline
} from "@mdi/js";
export default {
  props: ["person"],
  data() {
    return {
      icons: {
        birthday: mdiCalendar,
        director: mdiAccountTie,
        dead: mdiEmoticonDeadOutline,
        tv: mdiTelevisionClassic,
        movie: mdiFilmstrip,
        place: mdiCityVariantOutline,
        gender: mdiGenderMaleFemale,
        known: mdiAccountSwitch
      }
    };
  },
  methods: {
    dayjs,
    imagePath
  },

  computed: {
    total_movie_credits() {
      const { cast, crew } = this.person.movie_credits;
      return cast.length + crew.length;
    },
    total_tv_credits() {
      const { cast, crew } = this.person.tv_credits;
      return cast.length + crew.length;
    },
    gender() {
      return this.person.gender === 2 ? "Male" : "Female";
    }
  }
};
</script>

<style></style>
