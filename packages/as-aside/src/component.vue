<template>
  <section class="as-aside" :style="{ width }">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "AsAside",
  componentName: "AsAside",
  props: {
    width: {
      type: String,
      default: '300px'
    }
  }
}
</script>
