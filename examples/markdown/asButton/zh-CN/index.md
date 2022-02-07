
# Button 按钮

常用的操作按钮。

### 基础用法

:::demo

```html
<template>
  <div class="as-buttons flex-row">
    <as-button>默认按钮</as-button>
    <as-button class="info-button" style="margin-left:20px" type="info">信息按钮</as-button>
    <as-button style="margin-left:20px" type="primary">原始按钮</as-button>
    <as-button style="margin-left:20px" type="success">成功按钮</as-button>
    <as-button style="margin-left:20px" type="error">错误按钮</as-button>
    <as-button style="margin-left:20px" type="warning">警告按钮</as-button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
}
</script>

<style>
  .info-button {
    background-color: red;
  }
</style>
```

:::

### API

| 属性 | 描述 | 枚举 | 默认值 |
| :--- | :--- | :--- | :--- |
| type | 按钮的类型 | info,primary,success,error,warning,link | info |
