import Vue from 'vue'
import Router from 'vue-router'
import docConfig from '../doc.config'
import hljs from 'highlight.js';
import { getLang } from '../utils/lang';

const localLang = getLang();

Vue.use(Router)

console.log("docConfig: ", docConfig)
export const commonRoutes = [
  {
    path: '/',
    name: 'about',
    meta: {
      name: 'HomePage'
    },
    component: () => {
      if (localLang === 'en-US') {
        return import('../markdown/asAbout/en-US/index.md');
      } else {
        return import('../markdown/asAbout/zh-CN/index.md');
      }
    }
  }
];

const componentRoutes = [];

const { navConfig } = docConfig;

navConfig.forEach(navItem => {
  navItem.groups.forEach(groupItem => {
    groupItem.list.forEach(item => {
      if (item.path !== '/') {
        componentRoutes.push({
          path: item.path,
          name: item.path.slice(1),
          meta: {
            name: item.path.slice(1)
          },
          component: item.component
        });
      }
    });
  });
});

const routes = componentRoutes.concat(commonRoutes);

const router = new Router({
  routes: routes
})

router.afterEach(route => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});

export default router
