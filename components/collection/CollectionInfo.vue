<template>
  <div class="movie__info">
    <!-- Director -->
    <h1 class="heading--secondary mb-1">Director</h1>

    <h1
      class="heading--secondary mb-1"
      title="production companies"
      aria-label="production companies"
    >Production Companies</h1>

    <ul class="movie__info-list">
      <li v-for="companies in info.production_companies" :key="companies.id">
        <p v-text="companies.name" :title="companies.name" :aria-label="companies.name" />
      </li>
    </ul>

    <h1 class="heading--secondary mb-1">Production Countries</h1>
    <ul class="movie__info-list">
      <li v-for="countries in info.production_countries" :key="countries.iso_3166_1">
        <p class="paragraph--primary" v-text="countries.name" />
      </li>
    </ul>

    <h1 class="heading--secondary mb-1">Spoken Language</h1>
    <ul class="movie__info-list">
      <li v-for="language in info.spoken_languages" :key="language.iso_639_1">
        <p class="paragraph--primary" v-text="language.name " />
      </li>
    </ul>

    <h1 class="heading--secondary mb-1">Budget</h1>
    <ul class="movie__info-list">
      <li>
        <p class="paragraph--primary" v-text="budgetFormat" />
      </li>
    </ul>
    <div>
      <h1 class="heading--secondary mb-1">Revenue</h1>
      <ul class="movie__info-list">
        <li>
          <p class="paragraph--primary" v-text="revenueValidation" />
        </li>
      </ul>
    </div>

    <h1 class="heading--secondary mb-1">Runtime</h1>
    <ul class="movie__info-list">
      <li>
        <p class="paragraph--primary" v-text="hourFormat" />
      </li>
    </ul>
  </div>
</template>

<script>
import dayjs from "dayjs";
import numeral from "numeral";
import imagePath from "@/utils/imagePath";
export default {
  props: ["info"],
  methods: {
    dayjs,
    numeral,
    imagePath
  },
  computed: {
    budgetFormat() {
      return `$ ${numeral(this.info.budget).format("0,0.00")}`;
    },
    revenueValidation() {
      return this.info.revenue
        ? "$" + numeral(this.info.revenue).format("0,0.00")
        : "-";
    },
    hourFormat() {
      return `${parseFloat(this.info.runtime / 60).toFixed(2)} hrs`;
    }
  }
};
</script>

<style></style>
