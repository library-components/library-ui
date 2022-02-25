<template>
  <section
    class="as-checkbox-button"
    :class="{
      'is-checked': checked && !success,
      'is-disabled': disabled && !success,
      'is-success-checked': checked && success,
      'is-success-disabled': disabled && success,
      'is-group-bordered': hasGroup
    }"
    @click.prevent="handleClick">
    <input
      ref="input"
      class="as-checkbox-button__original"
      type="checkbox"
      :disabled="disabled" />
    <span class="as-checkbox-button__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
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
    label: String,
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
    parent () {
      return this.$parent || this.$root;
    },
    // 是否是复选框组
    hasGroup () {
      return this.parent.$options.componentName === 'AsCheckboxGroup'
    },
    checked () {
      if (this.parent.$options.componentName === 'AsCheckboxGroup') { // 当是复选框组时
        return this.parent.value.indexOf(this.label) !== -1
      }

      return this.value
    }
  },
  methods: {
    handleClick () {
      !this.disabled && this.handleChange()
    },
    handleChange () {
      this.$refs.input.checked = !this.checked

      if (this.parent.$options.componentName === 'AsCheckboxGroup') {
        this.handleGroupValue()
      }

      this.$emit("input", this.$refs.input.checked)
      this.$emit("change", this.$refs.input.checked)
    },
    handleGroupValue () {
      if (this.parent.value.indexOf(this.label) === -1) {
        return this.parent.value.push(this.label)
      }

      if (this.parent.value.indexOf(this.label) !== -1) {
        this.parent.value.forEach((item, index) => {
          if (item === this.label) {
            this.parent.value.splice(index, 1)
          }
        })
      }
    }
  }
}
</script>
