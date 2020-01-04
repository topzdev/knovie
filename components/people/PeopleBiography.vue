<template>
  <v-container>
    <div class="people__bio">
      <v-row>
        <v-col cols="3"></v-col>
        <v-col cols="8">
          <p class="paragraph--primary" v-text="truncateBiography" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import cliTruncate from "cli-truncate";
export default {
  props: ["biography"],
  computed: {
    truncateBiography() {
      return cliTruncate(this.$props.biography, 550);
    }
  }
};
</script>

<style>
</style>