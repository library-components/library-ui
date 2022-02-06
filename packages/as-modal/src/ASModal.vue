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
    name: 'AModal',
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

<style scoped>
.modal {
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1001;
}

.modal-background {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.5);
}

.modal-content {
    width: 50%;
    min-height: 50%;
    max-height: 80%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 12.5px;
    z-index: 999999;
    overflow:auto;
}
</style>