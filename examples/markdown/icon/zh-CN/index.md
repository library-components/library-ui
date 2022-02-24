## Icon 图标

提供了一套常用的图标集合。

### 使用方法

直接通过设置类名为 `as-icon-iconName` 来使用即可。例如：

:::demo

```html
<i class="as-icon-edit"></i>
<i class="as-icon-share-fill"></i>
<i class="as-icon-delete"></i>
<as-button type="primary" icon="as-icon-search">搜索</as-button>

```

:::

### 图标集合

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'as-icon-' + name"></i>
      <span class="icon-name">{{'as-icon-' + name}}</span>
    </span>
  </li>
</ul>
