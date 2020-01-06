<template>
  <div class="navbar__padding">
    <PersonPreviewer :person="person" />

    <div class="container">
      <div class="row">
        <div class="col col-3">
          <PersonInfo :person="person" />
        </div>

        <div class="col">
          <PersonBiography :biography="person.biography" />
          <Showcase
            title="Movies"
            :result="person.movie_credits.cast"
            cardSize="col-lg-3"
            type="Movies"
            class="mb-4"
            :toShow="person.movie_credits.cast.length"
          />

          <Showcase
            title="TV Shows"
            :result="person.tv_credits.cast"
            cardSize="col-lg-3"
            type="TV Shows"
            :toShow="person.tv_credits.cast.length"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PersonBiography from "@/components/person/PersonBiography";
import PersonPreviewer from "@/components/person/PersonPreviewer";
import PersonInfo from "@/components/person/PersonInfo";
import Showcase from "@/components/layout/Showcase";
export default {
  async fetch({ store, params }) {
    await store.dispatch("person/fetchPerson", params.id);
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
    PersonBiography,
    PersonPreviewer,
    Showcase,
    PersonInfo
  },

  computed: {
    person() {
      return this.$store.getters["person/getPerson"];
    }
  }
};
</script>

<style></style>
