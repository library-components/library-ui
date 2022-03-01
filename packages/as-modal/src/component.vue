<template>
  <section v-if="visible" class="as-modal" @touchmove.prevent>
    <div class="modal-background" @click="handleMaskClose"></div>
    <div class="modal-content" :style="{ width, marginTop: top }">
      <div class="modal-content__header">
        <slot name="title">
          <span class="as-modal__title">{{ title }}</span>
        </slot>
        <button class="as-modal__headerbtn" v-if="showClose" @click="handleClose">
          <i class="as-modal__close as-icon-error"></i>
        </button>
      </div>
      <div class="as-modal__body">
        <slot></slot>
      </div>
      <div class="as-modal__footer" v-if="$slots.footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'AsModal',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: true
    },
    closeOnMask: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    width: String,
    top: {
      type: String,
      default: '15vh'
    }
  },
  data () {
    return {}
  },
  methods: {
    // 阻止页面滚动
    stopMove(){
      let m = function(e){e.preventDefault();};
      document.body.style.overflow='hidden';
      document.addEventListener("touchmove",m,{ passive:false });//禁止页面滑动
    },
    //开启页面滚动
    startMove(){
      let m =function(e){e.preventDefault();};
      document.body.style.overflow='';//出现滚动条
      document.removeEventListener("touchmove",m,{ passive:true });
    },
    handleMaskClose () {
      if (!this.closeOnMask) return

      this.handleClose()
    },
    handleClose () {
      this.$emit("update:visible", false)
    }
  }
}
</script>
