<template>
  <section>
    <h1 class="heading--primary mb-1">Reviews</h1>

    <v-row>
      <v-col cols="12" class="mb-2">
        <div class="card--review">
          <div class="card--review__content">
            <h3 class="heading--secondary mb-1">What an amazing movie!!!</h3>
            <p class="paragraph--primary">
              Hey, so, just some really quick thoughts I wanna get down, 'cause it's after 1 o'clock in the morning, and I wanna get some sleep so I can wake up well rested to see Endgame again.
              Putting it out there right from the get-go, Avengers: Endgame is my favourite MCU movie. It's my favourite movie of the year too, but I've only seen like ten or so 2019 releases, and this is the 22nd Marvel Cinematic
              <button
                class="btn btn--peek"
              >see more...</button>
            </p>
          </div>

          <div class="card--review__user">
            <div class="card--review__user-profile">
              <p class="card--review__user-name" aria-label="Reviewers username">Christopher Lugod</p>
              <p class="card--review__date">December 20, 2019</p>
            </div>
            <div class="badge badge--primary badge--outlined color-yellow">
              9.8
              <v-icon>{{icons.star}}</v-icon>
            </div>
          </div>
        </div>
      </v-col>

      <v-col cols="12" class="mb-2">
        <div class="card--review">
          <div class="card--review__content">
            <h3 class="heading--secondary mb-1">The ending is broke my heart</h3>
            <p class="paragraph--primary">
              Avengers: Endgame is my favourite MCU movie. It's my favourite movie of the year too, but I've only seen like ten or so 2019 releases, and this is the 22nd Marvel Cinematic
              <button
                class="btn btn--peek"
              >see more...</button>
            </p>
          </div>

          <div class="card--review__user">
            <div class="card--review__user-profile">
              <p class="card--review__user-name" aria-label="Reviewers username">Christopher Lugod</p>
              <p class="card--review__date">December 20, 2019</p>
            </div>
            <div class="badge badge--primary badge--outlined color-yellow">
              9.8
              <v-icon>{{icons.star}}</v-icon>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="place-end">
        <MoreButton :title="title+ ' Reviews'" />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { mdiStar } from "@mdi/js";
import MoreButton from "../button/MoreButton";
export default {
  components: {
    MoreButton
  },

  props: ["title"],
  data() {
    return {
      icons: {
        star: mdiStar
      }
    };
  }
};
</script>
