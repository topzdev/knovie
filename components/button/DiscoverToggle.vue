<template>
  <div
    class="search__query search__toggler"
    :class="toggle === 'tv' ? 'search__toggler-chossen' : ''"
  >
    <span
      title="click to discover movies"
      class="search__query"
      @click="toggleMode(false)"
      :class="toggle  === 'tv' ? 'search__toggler-disabled' : ''"
    >Movies</span>
    <span
      title="click to discover tv shows"
      class="search__query"
      @click="toggleMode(true)"
      :class="toggle  === 'tv' ? '' : 'search__toggler-disabled'"
    >TV Shows</span>
  </div>
</template>

<script>
export default {
  props: ["toggle"],
  methods: {
    toggleMode(mode) {
      this.$emit("dis-toggle", mode);
    }
  }
};
</script>

<style>
</style>