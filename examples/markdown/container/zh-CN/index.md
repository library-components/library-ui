## Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

`<as-container>`：外层容器。当子元素中包含 `<as-header>` 或 `<as-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<as-header>`：顶栏容器。

`<as-aside>`：侧边栏容器。

`<as-main>`：主要区域容器。

`<as-footer>`：底栏容器。

:::tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<as-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<as-container>`。
:::

### 常见页面布局

:::demo

```html
<as-container>
  <as-header>Header</as-header>
  <as-main>Main</as-main>
</as-container>

<as-container style="margin-top:20px">
  <as-header>Header</as-header>
  <as-main>Main</as-main>
  <as-footer>Footer</as-footer>
</as-container>

<as-container style="margin-top:20px">
  <as-aside width="200px">Aside</as-aside>
  <as-main>Main</as-main>
</as-container>

<as-container style="margin-top:20px">
  <as-header>Header</as-header>
  <as-container>
    <as-aside width="200px">Aside</as-aside>
    <as-main>Main</as-main>
  </as-container>
</as-container>

<as-container style="margin-top:20px">
  <as-header>Header</as-header>
  <as-container>
    <as-aside width="200px">Aside</as-aside>
    <as-container>
      <as-main>Main</as-main>
      <as-footer>Footer</as-footer>
    </as-container>
  </as-container>
</as-container>

<as-container style="margin-top:20px">
  <as-aside width="200px">Aside</as-aside>
  <as-container>
    <as-header>Header</as-header>
    <as-main>Main</as-main>
  </as-container>
</as-container>

<as-container style="margin-top:20px">
  <as-aside width="200px">Aside</as-aside>
  <as-container>
    <as-header>Header</as-header>
    <as-main>Main</as-main>
    <as-footer>Footer</as-footer>
  </as-container>
</as-container>

<style>
  .as-header, .as-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .as-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .as-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .as-container {
    margin-bottom: 40px;
  }

  .as-container:nth-child(5) .as-aside,
  .as-container:nth-child(6) .as-aside {
    line-height: 260px;
  }

  .as-container:nth-child(7) .as-aside {
    line-height: 320px;
  }
</style>
```

:::

### Container API

| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `as-header` 或 `as-footer` 时为 vertical，否则为 horizontal |

### Header API

| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 顶栏高度 | string | — | 60px |

### Aside API

| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| width | 侧边栏宽度 | string | — | 300px |

### Footer API

| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 底栏高度 | string | — | 60px |
