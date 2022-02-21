# library-ui

基于vue2的个人组件库，不使用typescript

# 按需引入

在项目中安装`@vue/cli-plugin-babel`和`babel-plugin-import`

同时配置`babel.config.js`(该文件即.babelrc文件)文件如下：

```
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'import',
      {
        libraryName: 'library-ui',
        style: (name) => {
          return `${name}/index.css`;
        },
        camel2DashComponentName: false, // 是否需要驼峰转短线
        camel2UnderlineComponentName: false // 是否需要驼峰转下划线
      }
    ]
  ]
};
```

使用如下：

```
import { Button, Switch, Modal } from '@personal-lib/library-ui'

Vue.use(Button)
Vue.use(Switch)
Vue.use(Modal)
```

在页面中使用：
```
<template>
  <as-button type="info">信息按钮</as-button>
</template>
```
