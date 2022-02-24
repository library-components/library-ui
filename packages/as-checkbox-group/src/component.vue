<template>
  <section class="as-checkbox-group">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "AsCheckboxGroup",
  props: {
    value: {}
  }
}
</script>
