<template>
  <div class="navbar__padding">
    <PeoplePreviewer :people="people" />
    <PeopleBiography :biography="people.biography" />

    <v-container>
      <v-row>
        <v-col cols="3">
          <PeopleInfo :people="people" />
        </v-col>

        <v-col>
          <Showcase
            title="Movies"
            :result="people.movie_credits.cast"
            cardSize="col-lg-3"
            type="Movies"
            class="mb-4"
          />

          <Showcase
            title="TV Shows"
            :result="people.tv_credits.cast"
            cardSize="col-lg-3"
            type="TV Shows"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PeopleBiography from "@/components/people/PeopleBiography";
import PeoplePreviewer from "@/components/people/PeoplePreviewer";
import PeopleInfo from "@/components/people/PeopleInfo";
import Showcase from "@/components/layout/Showcase";
export default {
  async fetch({ store, params }) {
    await store.dispatch("people/fetchPeople", params.id);
  },

  data() {
    return {
      data: {
        profile: "/kU3B75TyRiCgE270EyZnHjfivoq.jpg",
        color: {
          primaryColor: "#000",
          secondaryColor: "#000"
        },
        name: "Brad Pitt"
      }
    };
  },

  components: {
    PeopleBiography,
    PeoplePreviewer,
    Showcase,
    PeopleInfo
  },

  computed: {
    people() {
      return this.$store.getters["people/getPeople"];
    }
  }
};
</script>

<style>
</style>