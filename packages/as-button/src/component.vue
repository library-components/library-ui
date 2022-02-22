<template>
  <button
    :disabled="disabled || loading"
    @click="handleClick"
    :class="['as-button', `as-button--${type}`, 
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'plain': plain,
        'is-round': round
      }
    ]">
    <i class="as-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
const types = ['default', 'primary', 'success', 'error', 'info', 'warning', 'link', 'text']

export default {
  name: 'AsButton',
  props: {
    type: {
      default: 'default',
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return types.indexOf(value) !== -1
      }
    },
    round: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: Boolean,
    icon: String
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
