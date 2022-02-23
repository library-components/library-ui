## Container

A container component for layout, which is convenient to quickly build the basic structure of the page:

`<as-container>`: The outer container. When the child element contains `<as-header>` or `<as-footer>`, all child elements will be arranged vertically up and down, otherwise they will be arranged horizontally and leftward.

`<as-header>`: The header container.

`<as-aside>`: The sidebar container.

`<as-main>`: The main area container.

`<as-footer>`: The bottom bar container.

:::tip
The above components use flex layout, please check whether the target browser is compatible before use. In addition, the child elements of `<as-container>` can only be the last four, and the parent elements of the latter four can only be `<as-container>`.
:::

### Common page layouts

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
