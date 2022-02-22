## Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

### 基础用法

:::demo

```html
<template>
  <div >
    <as-modal :visible.sync="form.visible" title="提示" :close-on-mask="false">
      <div>插槽内容</div>
      <span slot="footer">
        <as-button @click="form.visible = false">取 消</as-button>
        <as-button type="primary" @click="form.visible = false">确 定</as-button>
      </span>
    </as-modal>
    <as-button type="success" @click="showModal">显示dialog</as-button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      form: {
        visible: false
      }
    }
  },
  methods: {
    showModal() {
      this.form.visible = true
    }
  }
}
</script>

```

:::

### 包含支持文本介绍

:::demo

```html
<template>
  <div >
    <as-modal :visible.sync="form.visible" width="30%">
      <div style="height:50vh;">插槽内容</div>
    </as-modal>
    <as-button type="error" plain @click="showModal">显示dialog</as-button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      form: {
        visible: false
      }
    }
  },
  methods: {
    showModal() {
      this.form.visible = true
    }
  }
}
</script>

```

:::

### API

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| title | modal标题 | string | - |
| width | modal距离顶部的距离 | string | - |
| top | modal距离顶部的距离 | string | 15vh |
| visible | 是否显示modal，要跟.sync | Boolean | false |
| show-close | 显示关闭按钮 | Boolean | true |
| close-on-mask | 允许点击遮罩层关闭 | Boolean | true |
