<template>
  <section class="as-radio-group">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'AsRadioGroup',
  componentName: 'AsRadioGroup',
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
