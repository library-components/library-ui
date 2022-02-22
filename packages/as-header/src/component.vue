<template>
  <section class="as-header" :style="{ height }">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "AsHeader",
  componentName: "AsHeader",
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
}
</script>
