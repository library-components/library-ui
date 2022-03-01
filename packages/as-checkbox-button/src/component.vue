<template>
  <section
    class="as-checkbox-button"
    :class="{
      'is-checked': isChecked && !success,
      'is-disabled': disabled && !success,
      'is-success-checked': isChecked && success,
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
        v-if="success && isChecked"
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
    checked: Boolean,
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
  data () {
    return {
      isChecked: false
    }
  },
  computed: {
    // 是否是复选框组
    hasGroup () {
      let parent = this.$parent

      while (parent) {
        if (parent.$options.componentName !== 'AsCheckboxGroup') {
          parent = parent.$parent;
        } else {
          this.checkboxGroup = parent;
          return true;
        }
      }

      return false
    }
  },
  created () {
    if (this.hasGroup) {
      return this.isChecked = this.checkboxGroup.value.indexOf(this.value || this.label) !== -1
    }

    this.isChecked = this.checked || this.value
  },
  methods: {
    handleClick () {
      !this.disabled && this.handleChange()
    },
    handleChange () {
      this.isChecked = !this.isChecked

      if (this.hasGroup) {
        this.handleGroupValue()
        this.checkboxGroup.handleChange()
      }

      this.$emit("input", this.isChecked)
      this.$emit("change", this.isChecked, this.$refs.input)
    },
    handleGroupValue () {
      if (this.checkboxGroup.value.indexOf(this.value || this.label) === -1) {
        return this.checkboxGroup.value.push(this.value || this.label)
      }

      if (this.checkboxGroup.value.indexOf(this.value || this.label) !== -1) {
        this.checkboxGroup.value.forEach((item, index) => {
          if (item === (this.value || this.label)) {
            this.checkboxGroup.value.splice(index, 1)
          }
        })
      }
    }
  }
}
</script>
