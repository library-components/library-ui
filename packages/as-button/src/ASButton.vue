<template>
  <a :class="['as-button', `as-button-${type}`]">
    <span>
      <slot></slot>
    </span>
  </a>
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
    }
  }
}
</script>
