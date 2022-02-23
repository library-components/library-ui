<template>
  <section class="as-checkbox-button">
    <input class="as-checkbox-button__original" type="checkbox" :disabled="disabled" />
    <span class="as-checkbox-button__label">
      <slot></slot>
      <i v-if="success" class="as-checkbox-button__icon as-icon-success"></i>
    </span>
  </section>
</template>

<script>
export default {
  name: "AsCheckboxButton",
  props: {
    success: Boolean,
    disabled: Boolean
  }
}
</script>
