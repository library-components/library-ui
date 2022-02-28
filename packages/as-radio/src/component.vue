<template>
  <label
    class="as-radio"
    :class="{
      'is-checked': model === label,
      'is-disabled': disabled,
    }">
    <span
      class="as-radio__inner"
      :class="{
        'is-checked': model === label,
        'is-disabled': disabled,
        'is-bordered': border
      }">
      <input
        type="radio"
        ref="radio"
        class="as-radio__original"
        :disabled="disabled"
        :name="name"
        :value="label"
        v-model="model"
        @change="handleChange" />
    </span>
    <span
      class="as-radio-label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: "AsRadio",
  props: {
    value: {},
    label: {},
    name: String,
    disabled: Boolean,
    border: Boolean
  },
  computed: {
    hasGroup () {
      let parent = this.$parent

      while (parent) {
        if (parent.$options.componentName !== 'AsRadioGroup') {
          parent = parent.$parent;
        } else {
          this.radioGroup = parent;
          return true;
        }
      }

      return false
    },
    model: {
      get () {
        return this.hasGroup ? this.radioGroup.value : this.value;
      },
      set (val) {
        if (this.hasGroup) {
          this.radioGroup.value = val
        } else {
          this.$emit('input', val);
        }
        this.$refs.radio && (this.$refs.radio.checked = this.model === this.label);
      }
    },
  },
  methods: {
    handleChange (e) {
      console.log('点击：', e)

      this.$emit("change", this.value, e)
    }
  }
}
</script>
