<template>
    <div v-if="visible" class="modal" @touchmove.prevent>
        <div class="modal-background" @click="close"></div>
        <div class="modal-content">
            <slot name="content"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AsModal',
    props: {
        visible: {
            type: Boolean,
            default: false
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
        close () {
            this.$emit("update:visible", false)
        }
    }
}
</script>
