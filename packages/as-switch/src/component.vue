<template>
  <div
    class="switch-slide flex-inline secondary-center"
    :class="[{ 'is-disabled': switchDisabled }]"
    @click.prevent="switchValue"
  >
    <input
      type="checkbox"
      ref="input"
      :disabled="switchDisabled"
      hidden
      @change="handleChange"
      @keydown.enter="switchValue"
    />
    <span
      class="switch-label"
      :class="[
        { 'switch-left-label': inactiveText },
        !checked ? 'is-active' : '',
      ]"
    >
      {{ inactiveText }}
    </span>
    <span
      class="switch-slide-label"
      ref="core"
      :class="[{ 'switch-slide-checked': checked }]"
    ></span>
    <span
      class="switch-label"
      :class="[
        { 'switch-right-label': activeText },
        checked ? 'is-active' : '',
      ]"
    >
      {{ activeText }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'AsSwitch',
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 40,
    },
    activeIconClass: {
      type: String,
      default: '',
    },
    inactiveIconClass: {
      type: String,
      default: '',
    },
    activeText: String,
    inactiveText: String,
    activeColor: {
      type: String,
      default: '',
    },
    inactiveColor: {
      type: String,
      default: '',
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true,
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
    validateEvent: {
      type: Boolean,
      default: true,
    },
    id: String,
  },
  data() {
    return {
      coreWidth: this.width,
    }
  },
  created() {
    if (!~[this.activeValue, this.inactiveValue].indexOf(this.value)) {
      this.$emit('input', this.inactiveValue)
    }
  },
  computed: {
    checked() {
      return this.value === this.activeValue
    },
    switchDisabled() {
      return this.disabled || (this.elForm || {}).disabled
    },
  },
  watch: {
    checked() {
      this.$refs.input.checked = this.checked
      if (this.activeColor || this.inactiveColor) {
        this.setBackgroundColor()
      }
      if (this.validateEvent) {
        this.dispatch('ElFormItem', 'el.form.change', [this.value])
      }
    },
  },
  mounted() {
    /* istanbul ignore if */
    this.coreWidth = this.width || 40
    if (this.activeColor || this.inactiveColor) {
      this.setBackgroundColor()
    }
    this.$refs.input.checked = this.checked
  },
  methods: {
    handleChange(event) {
      const val = this.checked ? this.inactiveValue : this.activeValue
      this.$emit('input', val)
      this.$emit('change', val)
      this.$nextTick(() => {
        // set input's checked property
        // in case parent refuses to change component's value
        if (this.$refs.input) {
          this.$refs.input.checked = this.checked
        }
      })
    },
    setBackgroundColor() {
      let newColor = this.checked ? this.activeColor : this.inactiveColor
      this.$refs.core.style.borderColor = newColor
      this.$refs.core.style.backgroundColor = newColor
    },
    switchValue() {
      !this.switchDisabled && this.handleChange()
    }
  }
}
</script>
