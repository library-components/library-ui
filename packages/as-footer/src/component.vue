<template>
  <section class="as-footer">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "AsFooter",
  componentName: "AsFooter",
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
}
</script>
