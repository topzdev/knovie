<template>
  <div class="movie movie__sidebar people__info">
    <div v-show="people.known_for_department">
      <h1 class="heading--secondary mb-1">Known field</h1>
      <ul class="movie__info-list">
        <li>
          <p class="paragraph--primary" v-text="people.known_for_department" />
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

    <div v-show="people.gender">
      <h1 class="heading--secondary mb-1">Gender</h1>
      <ul class="movie__info-list">
        <li>
          <p class="paragraph--primary" v-text="people.gender  === '2' ? 'Male' : 'Female'" />
        </li>
      </ul>
    </div>

    <div v-show="people.place_of_birth">
      <h1 class="heading--secondary mb-1">Place of birth</h1>
      <ul class="movie__info-list">
        <li>
          <p class="paragraph--primary" v-text="people.place_of_birth" />
        </li>
      </ul>
    </div>

    <div v-show="people.birthday">
      <h1 class="heading--secondary mb-1">Birthdate</h1>
      <ul class="movie__info-list">
        <li>
          <p class="paragraph--primary" v-text="moment(people.birthday).format('MMMM Do YYYY')" />
        </li>
      </ul>
    </div>
    <div v-show="people.deathday">
      <h1 class="heading--secondary mb-1">Death Date</h1>
      <ul class="movie__info-list">
        <li>
          <p class="paragraph--primary" v-text="moment(people.deathday).format('MMMM Do YYYY')" />
        </li>
      </ul>
    </div>
    <div v-show="people.also_known_as.length > 0">
      <h1 class="heading--secondary mb-1">Also known as</h1>
      <ul class="movie__info-list">
        <li v-for="name in people.also_known_as" :key="name">
          <p class="paragraph--primary" v-text="name" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: ["people"],
  methods: {
    moment
  },
  computed: {
    total_movie_credits() {
      const { cast, crew } = this.$props.people.movie_credits;
      return cast.length + crew.length;
    },
    total_tv_credits() {
      const { cast, crew } = this.$props.people.tv_credits;
      return cast.length + crew.length;
    }
  }
};
</script>

<style>
</style>