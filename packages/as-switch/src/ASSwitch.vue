<template>
  <div class="switch-slide flex-inline secondary-center" :class="[{'is-disabled': switchDisabled}]" @click.prevent="switchValue">
    <input type="checkbox" ref="input" :disabled="switchDisabled" hidden @change="handleChange" @keydown.enter="switchValue" />
    <span class="switch-label" :class="[{'switch-left-label': inactiveText}, !checked ? 'is-active' : '']">{{ inactiveText }}</span>
    <span class="switch-slide-label" ref="core" :class="[{ 'switch-slide-checked': checked }]"></span>
    <span class="switch-label" :class="[{'switch-right-label': activeText},checked ? 'is-active' : '']">{{ activeText }}</span>
  </div>
</template>

<script>
export default {
  name: "AsSwitch",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    activeText: {
      type: String,
      default: ''
    },
    inactiveText: {
      type: String,
      default: ''
    },
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    inactiveColor: {
      type: String
    }
  },
  computed: {
    checked () {
      return this.value === this.activeValue
    },
    switchDisabled () {
      return this.disabled
    }
  },
  watch: {
    checked () {
      this.$refs.input.checked = this.checked;
      if (this.activeColor || this.inactiveColor) {
        this.setBackgroundColor();
      }
    }
  },
  mounted () {
    if (this.activeColor || this.inactiveColor) {
      this.setBackgroundColor();
    }
    this.$refs.input.checked = this.checked;
  },
  methods: {
    handleChange ($event) {
      const val = this.checked ? this.inactiveValue : this.activeValue;

      this.$emit('input', val);
      this.$emit('change', val);
    },
    setBackgroundColor() {
      let newColor = this.checked ? this.activeColor : this.inactiveColor;
      this.$refs.core.style.borderColor = newColor;
      this.$refs.core.style.backgroundColor = newColor;
    },
    switchValue() {
      !this.switchDisabled && this.handleChange();
    },
  }
};
</script>