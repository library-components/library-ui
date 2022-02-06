## html-webpack-plugin和webpack的版本需要保持一致，即使用webpack4，html-webpack-plugin也要使用4，否则会报错如下:
```
TypeError: Cannot read property 'tap' of undefined
```
## postcss-loader@4.2.0 与 webpack@4匹配，否则会报错如下：
```
Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):
    TypeError: this.getOptions is not a function
```
## happypack@5.0.1与webpack@4匹配，否则会报如下错误：
```
TypeError: Cannot read property 'length' of undefined
    at resolveLoader (C:\Users\admin\Desktop\vue-demo\node_modules\happypack\lib\WebpackUtils.js:138:17)
```
## url-loader的esMoudle需要手动设置成false,否则图片打包会出错，如下：
```
<img src="[object Module]" />
```
## 标签rotate的必要条件：1、块元素(块元素，行内块元素) 2、使之float, 这两个条件满足其一即可
## 当前菜单没有子路由时，不要添加router-view,会导致项目路由无法正常跳转
## vue中会存在首页白屏现象，所以和原生一样，把script标签放在最后，避免因为加载js导致页面白屏