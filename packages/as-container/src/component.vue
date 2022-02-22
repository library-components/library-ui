<template>
  <section class="as-container" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "AsContainer",
  componentName: 'AsContainer',
  props: {
    direction: String,
  },
  computed: {
    isVertical() {
      if (this.direction === 'vertical') {
        return true;
      } else if (this.direction === 'horizontal') {
        return false;
      }

      // 当存在header或footer时，布局必然是垂直方向的
      return this.$slots && this.$slots.default
        ? this.$slots.default.some(vNode => {
          console.log("vNode: ", vNode)
          const tag = vNode.componentOptions && vNode.componentOptions.tag;
          return tag === 'as-header' || tag === 'as-footer';
        })
        : false;
    }
  }
}
</script>
