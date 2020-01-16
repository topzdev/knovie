<template>
  <div class="navbar__padding">
    <PersonPreviewer :person="person" />

    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-3">
          <div class="person__poster">
            <img
              class="fit-image"
              v-lazy="imagePath(person.profile_path, 'w342')"
              :title="person.name"
              :alt="person.name + ' poster'"
              draggable="false"
              aria-label="Movie Poster"
            />
          </div>
          <SocialButton
            :links="person.external_ids"
            :homepage="person.homepage"
            type="name"
            class="mt-2 mx-auto"
          />
        </div>

        <div class="col-12 col-lg-9">
          <h1 class="person__title mt-2">{{ person.name }}</h1>

          <PersonBiography :biography="person.biography" />
          <PersonInfo :person="person" />
        </div>

        <div class="col">
          <Showcase
            title="Movies"
            :result="person.movie_credits.cast"
            cardSize="col-lg-custom"
            type="Movies"
            class="mb-4"
          />

          <Showcase
            title="TV Shows"
            :result="person.tv_credits.cast"
            cardSize="col-lg-custom"
            type="TV Shows"
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
import SocialButton from "@/components/button/SocialButton";
import imagePath from "@/utils/imagePath";
import seoPersonHead from "@/utils/seoPerson";

export default {
  head() {
    return seoPersonHead(this.person, this.$route);
  },
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
    PersonInfo,
    SocialButton
  },

  methods: {
    imagePath
  },

  computed: {
    person() {
      return this.$store.getters["person/getPerson"];
    }
  }
};
</script>

<style></style>
