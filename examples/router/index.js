import Vue from 'vue'
import Router from 'vue-router'
import docConfig from '../doc.config'
import hljs from 'highlight.js';
import { getLang } from '../utils/lang';

const Index = resolve => require(['../pages/index.vue'], resolve)
const Layout = resolve => require(['~/examples/layout'], resolve)

const localLang = getLang();

Vue.use(Router)

console.log("docConfig: ", docConfig)
export const commonRoutes = [
  {
    path: '/index',
    name: 'index',
    meta: {
      name: 'HomePage'
    },
    component: Index
  },
  {
    path: '/',
    name: 'layout',
    redirect: '/about',
    meta: {
      name: 'HomePage'
    },
    component: Layout,
    children: [{
      path: 'about',
      name: 'about',
      component: () => {
        if (localLang === 'en-US') {
          return import('~/examples/markdown/asAbout/en-US/index.md');
        } else {
          return import('~/examples/markdown/asAbout/zh-CN/index.md');
        }
      }
    }]
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


for (let i=0; i<commonRoutes.length; i++) {
  if (commonRoutes[i].path === '/') {
    commonRoutes[i].children = [...commonRoutes[i].children, ...componentRoutes]
  }
}

// console.log('componentRoutes: ', componentRoutes)
// console.log('routes: ', commonRoutes)

const router = new Router({
  routes: commonRoutes
})

router.afterEach(route => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});

export default router
