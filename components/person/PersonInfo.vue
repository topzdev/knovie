<template>
  <div class="person__info">
    <div class="person__poster">
      <img
        class="fit-image"
        :src="imagePath(person.profile_path, 'w342')"
        :title="person.name"
        :alt="person.name + ' poster'"
        draggable="false"
        aria-label="Movie Poster"
      />
    </div>
    <div class="person__sub-info">
      <div v-show="person.known_for_department">
        <h1 class="heading--secondary mb-1">Known field</h1>
        <ul class="movie__info-list">
          <li>
            <p class="paragraph--primary" v-text="person.known_for_department" />
          </li>
        </ul>
      </div>

      <div v-show="total_movie_credits > 0">
        <h1 class="heading--secondary mb-1">Total Movie Credited</h1>
        <ul class="movie__info-list">
          <li>
            <p class="paragraph--primary" v-text="total_movie_credits" />
          </li>
        </ul>
      </div>

      <div v-show="total_tv_credits > 0">
        <h1 class="heading--secondary mb-1">Total TV Shows Credited</h1>
        <ul class="movie__info-list">
          <li>
            <p class="paragraph--primary" v-text="total_tv_credits" />
          </li>
        </ul>
      </div>

      <div v-show="person.gender">
        <h1 class="heading--secondary mb-1">Gender</h1>
        <ul class="movie__info-list">
          <li>
            <p class="paragraph--primary" v-text="person.gender  === 2 ? 'Male' : 'Female'" />
          </li>
        </ul>
      </div>

      <div v-show="person.place_of_birth">
        <h1 class="heading--secondary mb-1">Place of birth</h1>
        <ul class="movie__info-list">
          <li>
            <p class="paragraph--primary" v-text="person.place_of_birth" />
          </li>
        </ul>
      </div>

      <div v-show="person.birthday">
        <h1 class="heading--secondary mb-1">Birthdate</h1>
        <ul class="movie__info-list">
          <li>
            <p class="paragraph--primary" v-text="dayjs(person.birthday).format('MMMM Do YYYY')" />
          </li>
        </ul>
      </div>
      <div v-show="person.deathday">
        <h1 class="heading--secondary mb-1">Death Date</h1>
        <ul class="movie__info-list">
          <li>
            <p class="paragraph--primary" v-text="dayjs(person.deathday).format('MMMM Do YYYY')" />
          </li>
        </ul>
      </div>
      <div v-show="person.also_known_as.length > 0">
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
import dayjs from 'dayjs'
import imagePath from "@/utils/imagePath";
export default {
  props: ["person"],
  methods: {
    dayjs,
    imagePath
  },

  computed: {
    total_movie_credits() {
      const { cast, crew } = this.$props.person.movie_credits;
      return cast.length + crew.length;
    },
    total_tv_credits() {
      const { cast, crew } = this.$props.person.tv_credits;
      return cast.length + crew.length;
    }
  }
};
</script>

<style>
</style>