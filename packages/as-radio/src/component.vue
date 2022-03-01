<template>
  <label
    class="as-radio"
    :class="[model === label ? `is-checked-${type}` : '', {
      'is-disabled': disabled,
    }]">
    <span
      class="as-radio__inner"
      :class="[ model === label ? `is-checked-${type}` : '', {
        'is-disabled': disabled,
        'is-bordered': border
      }]">
      <i
        class="as-radio-icon"
        :class="[`as-icon-${type.replace(/primary/g, 'success')}`, {
          'is-disabled': disabled
        }]">
      </i>
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
const radioTypes = ['success', 'danger', 'error', 'info', 'primary']

export default {
  name: "AsRadio",
  props: {
    value: {},
    label: {},
    name: String,
    disabled: Boolean,
    border: Boolean,
    type: {
      type: String,
      default: "primary",
      validator: function (value) {
        return radioTypes.indexOf(value) !== -1
      }
    }
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
          this.radioGroup.handleChange(val)
        } else {
          this.$emit('input', val);
        }
        this.$refs.radio && (this.$refs.radio.checked = this.model === this.label);
      }
    },
  },
  methods: {
    handleChange (e) {
      this.$nextTick(() => {
        this.$emit('change', this.model);
        this.isGroup && this.radioGroup.handleChange(this.model);
      });
    }
  }
}
</script>
