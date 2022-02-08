
# Dialog对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

### 基础用法

:::demo

```html
<template>
  <div >
    <as-modal :visible.sync="form.visible">
      <template #content>
        <div style="height:100vh;">插槽内容</div>
      </template>
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

### 自定义关闭

:::demo

```html
<template>
  <div >
    <as-modal :visible.sync="form.visible">
      <template #content>
        <div>插槽内容</div>
      </template>
    </as-modal>
    <as-button type="primary" plain round @click="showModal">显示dialog</as-button>
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
    <as-modal :visible.sync="form.visible">
      <template #content>
        <div style="height:100vh;">插槽内容</div>
      </template>
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
| visible | 是否显示modal，要跟.sync | Boolean | false |
