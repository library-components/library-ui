<template>
  <section
    class="as-checkbox"
    :class="[{
      'is-checked': checked,
      'is-disabled': disabled,
      'is-bordered': border
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
    <label class="as-checkbox__label" :class="{
      'is-disabled': disabled
    }">
      <slot></slot>
    </label>
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
    disabled: Boolean,
    border: Boolean
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
    handleChange ($event) {
      this.$refs.input.checked = !this.checked

      this.$emit("input", this.$refs.input.checked)
      this.$emit("change", this.$refs.input.checked)
    }
  }
}
</script>
