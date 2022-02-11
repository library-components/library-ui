<template>
  <section>
    <ASHeader
      :config="config.headerConfig"
    />
    <section class="main-content flex-row main-between">
      <ASNav
        :config="config.navConfig"
        class="sidebar"
      />
      <ASContainer ref="componentScroll">
        <router-view />
      </ASContainer>
    </section>
  </section>
</template>

<script>
import ASHeader from '~/examples/components/ASHeader/index.vue';
import ASNav from '~/examples/components/ASNav/index.vue';
import ASContainer from '~/examples/components/ASContainer/index.vue';
import config from '~/examples/doc.config';
import throttle from 'throttle-debounce/throttle';

export default {
  components: { ASHeader, ASNav, ASContainer },
  data: function () {
    return {
      config: config,
      scrollTop: 0,
      componentScrollBox: null,
      anchorScroll: true
    };
  },
  watch: {
    '$route.path'() {
      // 重置滚动条高度
      this.componentScrollBox.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  },
  mounted () {
    this.componentScrollBox = this.$refs.componentScroll.$el.querySelector('.n-doc-content');
    this.throttledScrollHandler = throttle(300, this.handleScroll);
    this.componentScrollBox.addEventListener('scroll', this.throttledScrollHandler);
    this.renderAnchorHref();
    this.goAnchor();
  },
  beforeRouteUpdate(to, from, next) {
    next();

    setTimeout(() => {
      const toPath = to.path;
      const fromPath = from.path;

      if (toPath === fromPath && to.hash) {
        // 每次锚点时都要将anchorScroll置为true
        this.anchorScroll = true

        // 这边判断是否一开始就在页面底部，在则未滚动，需要将anchorScroll直接置为false
        if (this.isReachBottom()) {
          this.anchorScroll = false
        }

        this.goAnchor();
      }
      if (toPath !== fromPath) {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
        this.renderAnchorHref();
      }
    }, 100);
  },
  beforeDestroy () {
    this.componentScrollBox.removeEventListener('scroll', this.throttledScrollHandler);
  },
  methods: {
    // 锚点url拼接，不然会导致锚点点击跳转后刷新，页面丢失
    renderAnchorHref() {
      const anchors = document.querySelectorAll('h2 a,h3 a,h4 a,h5 a');
      const basePath = location.href.split('#').splice(0, 2).join('#');

      [].slice.call(anchors).forEach(a => {
        const href = a.getAttribute('href');
        a.href = basePath + href;

        // console.log('href: ', a.href)
      });
    },
    // 前往对应锚点
    goAnchor() {
      const anchor = this.getAnchor();

      if (anchor) {
        setTimeout(_ => {
          this.componentScrollBox.scrollTo({
            top: anchor.offsetTop - this.componentScrollBox.offsetTop,
            behavior: 'smooth'
          })
        }, 50);
      }
    },
    // 获取锚点节点信息
    getAnchor () {
       if (location.href.match(/#/g).length > 1) {
        const anchor = location.href.match(/#[^#]+$/g);
        if (!anchor) return null;
        const elm = document.querySelector(anchor[0]);
        if (!elm) return null;

        return elm;
      }
    },
    // 判断是否到底部
    isReachBottom () {
      //文档内容实际高度（包括超出视窗的溢出部分）
      const scrollTop = this.componentScrollBox.scrollTop;
      let scrollHeight = this.componentScrollBox.scrollHeight;
      let clientHeight = this.componentScrollBox.innerHeight || this.componentScrollBox.clientHeight;

      if (Math.ceil(clientHeight + scrollTop) >= scrollHeight) {
        console.log('到底了：', scrollTop)
        return true
      }

      return false
    },
    handleScroll() {
      const scrollTop = Math.ceil(this.componentScrollBox.scrollTop);
      const anchor = this.getAnchor()

      if (anchor) {
        if (this.anchorScroll) {
          // 当滚动到底了
          if (this.isReachBottom()) {
            this.anchorScroll = false
          }

          if (scrollTop === anchor.offsetTop - this.componentScrollBox.offsetTop) {
            this.scrollTop = scrollTop;

            // 滚动结束后将标志锚点点击导致滚动的flag置为false
            this.anchorScroll = false
          }

          return
        }

        // 当不是锚点滚动时或到底时, 实时保存最新的滚动距离
        if (!this.anchorScroll) {
          this.scrollTop = scrollTop
          if (this.scrollTop !== anchor.offsetTop - this.componentScrollBox.offsetTop) {
            location.href = location.href.replace(/#[^#]+$/g, '')

            console.log('赋新值：', this.scrollTop, anchor.offsetTop - this.componentScrollBox.offsetTop)
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main-content {
  width: 100vw;
  height: calc(100vh - 60px);
}
</style>
