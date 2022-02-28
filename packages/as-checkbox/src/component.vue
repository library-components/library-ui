<template>
  <section
    class="as-checkbox"
    :class="[{
      'is-checked': isChecked,
      'is-disabled': disabled,
      'is-bordered': border,
      'is-group-bordered': hasGroup && border
    }]"
    @click.prevent="handleClick">
    <span class="as-checkbox__input">
      <span
        class="as-checkbox__inner"
        :class="[{
          'is-checked': isChecked,
          'is-disabled': disabled
        }]"></span>
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
    },
    label: String,
    checked: Boolean,
    disabled: Boolean,
    border: Boolean
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
    },
  },
  created () {
    if (this.hasGroup) {
      return this.isChecked = this.checkboxGroup.value.indexOf(this.value || this.label) !== -1
    }

    this.isChecked = this.checked
  },
  methods: {
    handleClick () {
      !this.disabled && this.handleChange()
    },
    handleChange ($event) {
      this.isChecked = !this.isChecked

      if (this.hasGroup) {
        this.handleGroupValue()
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
