<template>
  <div class="info">
    <SmallPreviewer />
    <NavbarPreview />

    <div class="info__cast mt-3 pb-5">
      <v-container>
        <v-col>
          <v-row>
            <h1 class="heading--primary">Cast</h1>
          </v-row>
        </v-col>
      </v-container>
    </div>
  </div>
</template>

<script>
import SmallPreviewer from "@/components/includes/SmallPreviewer";
import NavbarPreview from "@/components/layout/NavbarPreview";
export default {
  components: {
    SmallPreviewer,
    NavbarPreview
  }
};
</script>

<style>
</style>