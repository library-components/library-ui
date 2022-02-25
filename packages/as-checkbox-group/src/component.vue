<template>
  <section class="as-checkbox-group">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "AsCheckboxGroup",
  componentName: "AsCheckboxGroup",
  props: {
    value: {}
  },
  methods: {
    handleChange () {
      this.$emit("input", this.value)
      this.$emit("change", this.value)
    }
  }
}
</script>
