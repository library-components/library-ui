# Layout

Create layouts quickly and easily with the basic 24-column.

### Basic layout

:::demo

```html
<as-row>
  <as-col :span="24"><div class="grid-content bg-purple-dark"></div></as-col>
</as-row>
<as-row>
  <as-col :span="12"><div class="grid-content bg-purple"></div></as-col>
  <as-col :span="12"><div class="grid-content bg-purple-light"></div></as-col>
</as-row>
<as-row>
  <as-col :span="8"><div class="grid-content bg-purple"></div></as-col>
  <as-col :span="8"><div class="grid-content bg-purple-light"></div></as-col>
  <as-col :span="8"><div class="grid-content bg-purple"></div></as-col>
</as-row>
<as-row>
  <as-col :span="6"><div class="grid-content bg-purple"></div></as-col>
  <as-col :span="6"><div class="grid-content bg-purple-light"></div></as-col>
  <as-col :span="6"><div class="grid-content bg-purple"></div></as-col>
  <as-col :span="6"><div class="grid-content bg-purple-light"></div></as-col>
</as-row>
<as-row>
  <as-col :span="4"><div class="grid-content bg-purple"></div></as-col>
  <as-col :span="4"><div class="grid-content bg-purple-light"></div></as-col>
  <as-col :span="4"><div class="grid-content bg-purple"></div></as-col>
  <as-col :span="4"><div class="grid-content bg-purple-light"></div></as-col>
  <as-col :span="4"><div class="grid-content bg-purple"></div></as-col>
  <as-col :span="4"><div class="grid-content bg-purple-light"></div></as-col>
</as-row>

<style>
  .as-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .as-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```

:::

### column interval

There are gaps between the columns.

:::demo The Row component provides the `gutter` property to specify the interval between each column, the default interval is 0.

```html
<as-row :gutter="20">
  <as-col :span="6"><div class="grid-content bg-purple"></div></as-col>
  <as-col :span="6"><div class="grid-content bg-purple"></div></as-col>
  <as-col :span="6"><div class="grid-content bg-purple"></div></as-col>
  <as-col :span="6"><div class="grid-content bg-purple"></div></as-col>
</as-row>

<style>
  .as-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .as-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```

:::

### mixed layout

The basic 1/24 column can be arbitrarily expanded and combined to form a more complex mixed layout.

:::demo

```html
<as-row :gutter="20">
  <as-col :span="16"><div class="grid-content bg-purple"></div></as-col>
  <as-col :span="8"><div class="grid-content bg-purple"></div></as-col>
</as-row>
<as-row :gutter="20">
  <as-col :span="8"><div class="grid-content bg-purple"></div></as-col>
  <as-col :span="8"><div class="grid-content bg-purple"></div></as-col>
  <as-col :span="4"><div class="grid-content bg-purple"></div></as-col>
  <as-col :span="4"><div class="grid-content bg-purple"></div></as-col>
</as-row>
<as-row :gutter="20">
  <as-col :span="4"><div class="grid-content bg-purple"></div></as-col>
  <as-col :span="16"><div class="grid-content bg-purple"></div></as-col>
  <as-col :span="4"><div class="grid-content bg-purple"></div></as-col>
</as-row>

<style>
  .as-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .as-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```

:::

### column offset

Offsets are supported by the specified number of columns.

:::demo By specifying the `offset` property of the col component, you can specify the number of columns to offset the column.

```html
<as-row :gutter="20">
  <as-col :span="6"><div class="grid-content bg-purple"></div></as-col>
  <as-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></as-col>
</as-row>
<as-row :gutter="20">
  <as-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></as-col>
  <as-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></as-col>
</as-row>
<as-row :gutter="20">
  <as-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></as-col>
</as-row>

<style>
  .as-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .as-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```

:::

### Alignment

Columns can be flexibly aligned with `flex` layout.

:::demo Set the `type` property to 'flex' to enable flex layout, and specify the start, center, end, space-between, space-around values of the `justify` property to define how child elements are typeset.

```html
<as-row type="flex" class="row-bg">
  <as-col :span="6"><div class="grid-content bg-purple"></div></as-col>
  <as-col :span="6"><div class="grid-content bg-purple-light"></div></as-col>
  <as-col :span="6"><div class="grid-content bg-purple"></div></as-col>
</as-row>
<as-row type="flex" class="row-bg" justify="center">
  <as-col :span="6"><div class="grid-content bg-purple"></div></as-col>
  <as-col :span="6"><div class="grid-content bg-purple-light"></div></as-col>
  <as-col :span="6"><div class="grid-content bg-purple"></div></as-col>
</as-row>
<as-row type="flex" class="row-bg" justify="end">
  <as-col :span="6"><div class="grid-content bg-purple"></div></as-col>
  <as-col :span="6"><div class="grid-content bg-purple-light"></div></as-col>
  <as-col :span="6"><div class="grid-content bg-purple"></div></as-col>
</as-row>
<as-row type="flex" class="row-bg" justify="space-between">
  <as-col :span="6"><div class="grid-content bg-purple"></div></as-col>
  <as-col :span="6"><div class="grid-content bg-purple-light"></div></as-col>
  <as-col :span="6"><div class="grid-content bg-purple"></div></as-col>
</as-row>
<as-row type="flex" class="row-bg" justify="space-around">
  <as-col :span="6"><div class="grid-content bg-purple"></div></as-col>
  <as-col :span="6"><div class="grid-content bg-purple-light"></div></as-col>
  <as-col :span="6"><div class="grid-content bg-purple"></div></as-col>
</as-row>

<style>
  .as-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .as-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```

:::

### Responsive layout

Referring to Bootstrap's responsive design, there are five preset responsive sizes: `xs`, `sm`, `md`, `lg` and `xl`.

:::demo

```html
<as-row :gutter="10">
  <as-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
    <div class="grid-content bg-purple"></div>
  </as-col>
  <as-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
    <div class="grid-content bg-purple-light"></div>
  </as-col>
  <as-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
    <div class="grid-content bg-purple"></div>
  </as-col>
  <as-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
    <div class="grid-content bg-purple-light"></div>
  </as-col>
</as-row>

<style>
  .as-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
```

:::

### Row Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| gutter | 栅格间隔 | number | — | 0 |
| type | 布局模式，可选 flex，现代浏览器下有效 | string | — | — |
| justify | flex 布局下的水平排列方式 | string | start/end/center/space-around/space-between | start |
| align | flex 布局下的垂直排列方式 | string | top/middle/bottom | — |
| tag | 自定义元素标签 | string | * | div |

### Col Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| span | 栅格占据的列数 | number | — | 24 |
| offset | 栅格左侧的间隔格数 | number | — | 0 |
| push |  栅格向右移动格数 | number | — | 0 |
| pull |  栅格向左移动格数 | number | — | 0 |
| xs | `<768px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| sm | `≥768px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| md | `≥992px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| lg | `≥1200px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| xl | `≥1920px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| tag | 自定义元素标签 | string | * | div |
