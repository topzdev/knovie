<template>
  <div class="select select--primary">
    <label for v-text="label" />
    <select v-model="inputVal">
      <option disabled value>{{ placeholder }}</option>
      <option
        v-for="option in options"
        :value="toShow('id', option)"
        :key="toShow('id', option)"
        >{{ toShow("text", option) }}</option
      >
    </select>
  </div>
</template>

<script>
export default {
  props: [
    "options",
    "params",
    "label",
    "placeholder",
    "item-text",
    "item-value",
    "value"
  ],
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  },

  methods: {
    toShow(type, option) {
      const { itemValue, itemText } = this.$props;
      if (type === "id")
        return itemValue != undefined ? option[itemValue] : option;
      else if (type === "text")
        return itemText != undefined ? option[itemText] : option;
    }
  }
};
</script>

<style></style>
