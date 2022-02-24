<template>
  <section
    class="as-checkbox-button"
    :class="{
      'is-checked': checked && !success,
      'is-disabled': disabled && !success,
      'is-success-checked': checked && success,
      'is-success-disabled': disabled && success,
    }"
    @click.prevent="handleClick">
    <input
      ref="input"
      class="as-checkbox-button__original"
      type="checkbox"
      :disabled="disabled" />
    <span class="as-checkbox-button__label">
      <slot></slot>
      <i
        v-if="success && checked"
        class="as-checkbox-button__icon"
        :class="[`is-${direction}`, `as-icon-success-${direction}`]"></i>
    </span>
  </section>
</template>

<script>
const directions = ['top-left', 'top-right', 'right-bottom']

export default {
  name: "AsCheckboxButton",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    success: Boolean,
    disabled: Boolean,
    icon: String,
    direction: {
      type: String,
      default: 'right-bottom',
      validator: function (value) {
        return directions.indexOf(value) !== -1
      }
    }
  },
  computed: {
    checked () {
      return this.value
    }
  },
  methods: {
    handleClick () {
      !this.disabled && this.handleChange()
    },
    handleChange () {
      this.$refs.input.checked = !this.checked
      this.$emit("input", this.$refs.input.checked)
      this.$emit("change", this.$refs.input.checked)
    }
  }
}
</script>
