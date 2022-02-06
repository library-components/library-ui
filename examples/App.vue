<template>
  <div class="app">
    <ASHeader
      :config="config.headerConfig"
    />
    <ASNav
      :config="config.navConfig"
    />
    <ASContainer>
      <router-view />
    </ASContainer>
  </div>
</template>

<script>
import ASHeader from './components/ASHeader/index.vue';
import ASNav from './components/ASNav/index.vue';
import ASContainer from './components/ASContainer/index.vue';
import config from './doc.config';
export default {
  name: 'App',
  components: { ASHeader, ASNav, ASContainer },
  data: function () {
    return {
      config: config
    };
  }
};
</script>

<style lang="scss" scoped>
.app {
  background-color: #ffffff;
  -webkit-font-smoothing: antialiased;
  font-family: PingFang SC,Helvetica Neue,Arial,sans-serif;
}
</style>
