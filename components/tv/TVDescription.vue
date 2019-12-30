<template>
  <div class="mb-5">
    <h1 class="heading--primary mb-2">Plot</h1>

    <p class="paragraph--primary">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["description"]
};
</script>
