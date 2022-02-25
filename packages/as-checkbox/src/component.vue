<template>
  <section
    class="as-checkbox"
    :class="[{
      'is-checked': checked,
      'is-disabled': disabled,
      'is-bordered': border,
      'is-group-bordered': hasGroup
    }]"
    @click.prevent="handleClick">
    <span class="as-checkbox__input">
      <span
        class="as-checkbox__inner"
        :class="[{
          'is-checked': checked,
          'is-disabled': disabled
        }]"></span>
      <input
        class="as-checkbox__original"
        type="checkbox"
        ref="input"
        :disabled="disabled" />
    </span>
    <span class="as-checkbox__label" :class="{
      'is-disabled': disabled
    }">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </section>
</template>

<script>
export default {
  name: 'AsCheckbox',
  props: {
    value: { // 对自定义组件使用v-model时，组件内必须使用value来接收v-model传来的值
      type: Boolean,
      default: false
    },
    label: String,
    disabled: Boolean,
    border: Boolean
  },
  computed: {
    parent () {
      return this.$parent || this.$root;
    },
    // 是否是复选框组
    hasGroup () {
      return this.parent.$options.componentName === 'AsCheckboxGroup' && this.border
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
    handleChange ($event) {
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
