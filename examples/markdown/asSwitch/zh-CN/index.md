## Switch 切换按钮

### 简单使用

:::demo

```html
<template>
  <as-switch
    v-model="checked"
    active-color="#13ce66"
    inactive-color="#ff4949">
  </as-switch>
</template>
<script>
  export default {
    data () {
      return {
        checked: true
      }
    },
    watch: {
      checked (newValue) {
        console.log('newValue: ', newValue)
      }
    }
  }
</script>
```

:::

### 文字描述

:::demo 使用`active-text`属性与`inactive-text`属性来设置开关的文字描述。

```html
<as-row>
  <as-switch
    v-model="value1"
    active-text="按月付费"
    inactive-text="按年付费">
  </as-switch>
</as-row>

<as-row>
  <as-switch
    v-model="value2"
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-text="按月付费"
    inactive-text="按年付费">
  </as-switch>
</as-row>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true
      }
    }
  };
</script>
```

:::

### 扩展的 value 类型

:::demo 设置`active-value`和`inactive-value`属性，接受`Boolean`, `String`或`Number`类型的值。

```html
<as-switch
  v-model="value"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-value="100"
  inactive-value="0">
</as-switch>

<script>
  export default {
    data() {
      return {
        value: '100'
      }
    },
    watch: {
      value (newValue) {
        console.log('扩展的类型：', newValue)
      }
    }
  };
</script>
```

:::

### 禁用状态

:::demo 设置`disabled`属性，接受一个`Boolean`，设置`true`即可禁用。

```html
<as-switch
  v-model="value1"
  disabled>
</as-switch>
<as-switch
  v-model="value2"
  disabled>
</as-switch>
<script>
  export default {
    data() {
      return {
        value1: true,
        value2: false
      }
    }
  };
</script>
```

:::

### API

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | boolean / string / number | — | — |
| disabled  | 是否禁用    | boolean   | — | false   |
| active-text  | switch 打开时的文字描述    | string   | — | — |
| inactive-text  | switch 关闭时的文字描述    | string   | — | — |
| active-value  | switch 打开时的值    | boolean / string / number | — | true |
| inactive-value  | switch 关闭时的值    | boolean / string / number | — | false |
| active-color  | switch 打开时的背景色    | string   | — | #409EFF |
| inactive-color  | switch 关闭时的背景色    | string   | — | #C0CCDA |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | switch 状态发生变化时的回调函数    | 新状态的值 |
