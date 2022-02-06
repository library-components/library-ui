<template>
  <section>
    <ASHeader
      :config="config.headerConfig"
    />
    <ASNav
      :config="config.navConfig"
    />
    <ASContainer>
      <router-view />
    </ASContainer>
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