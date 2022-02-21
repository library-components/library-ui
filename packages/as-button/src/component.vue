<template>
  <button
    :disabled="disabled"
    :class="['as-button', `as-button--${type}`, 
      {
        'is-disabled': disabled,
        'plain': plain,
        'is-round': round
      }
    ]"
    @click="handleClick">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
const types = ['default', 'primary', 'success', 'error', 'info', 'warning', 'link']

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
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
