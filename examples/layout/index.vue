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
      <ASContainer>
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

export default {
  components: { ASHeader, ASNav, ASContainer },
  data: function () {
    return {
      config: config
    };
  }
}
</script>

<style lang="scss" scoped>
.main-content {
  width: 100vw;
  height: calc(100vh - 60px);
}
</style>
