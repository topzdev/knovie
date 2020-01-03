<template>
  <div class="navbar__padding">
    <PeoplePreviewer :people="data" />
  </div>
</template>

<script>
import PeopleBiography from "@/components/people/PeopleBiography";
import PeoplePreviewer from "@/components/people/PeoplePreviewer";
export default {
  data() {
    return {
      data: {
        profile: "/kU3B75TyRiCgE270EyZnHjfivoq.jpg",
        color: {
          primaryColor: "#000",
          secondaryColor: "#000"
        },
        name: "Henrry Cavil"
      }
    };
  },

  components: {
    PeopleBiography,
    PeoplePreviewer
  },

  computed: {
    people() {
      const { id } = this.$route;
      return this.$store.dispatch("people/fetchPeople", id);
    }
  }
};
</script>

<style>
</style>