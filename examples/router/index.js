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
    path: '/',
    redirect: '/index',
    component: Index, // 必须有，可以和重定向的页面一样，否则重定向到空白页
    children: [{
      path: 'index',
      name: 'index',
      component: Index
    }]
  },
  {
    path: '/components',
    name: 'layout',
    redirect: '/about',
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
  },
  {
    path: '*',
    redirect: '/index'
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
          name: item.path,
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
  if (commonRoutes[i].path === '/components') {
    commonRoutes[i].children = [...commonRoutes[i].children, ...componentRoutes]
  }
}

console.log('componentRoutes: ', componentRoutes)
console.log('routes: ', commonRoutes)

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
