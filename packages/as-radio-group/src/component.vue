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
  created () {
    this.$on("handleChange", (value) => {
      this.$emit("change", value)
    })
  },
  methods: {
    handleChange (val) {
      this.$emit("input", val)
      this.$emit("change", val)
    }
  }
}
</script>
