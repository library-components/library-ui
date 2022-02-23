
# Dialog

Alert component for feedback.

## When To Use

When you need to show alert messages to users.

## Examples

### Basic use

:::demo

```html
<template>
  <div >
    <as-modal :visible.sync="form.visible" title="tip" :close-on-mask="false">
      <div>content</div>
      <span slot="footer">
        <as-button @click="form.visible = false">cancel</as-button>
        <as-button type="primary" @click="form.visible = false">confirm</as-button>
      </span>
    </as-modal>
    <as-button type="success" @click="showModal">show dialog</as-button>
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

### Contains supporting text introduction

:::demo

```html
<template>
  <div >
    <as-modal title="custom content" :visible.sync="form.visible" width="30%">
      <div style="height:50vh;">content</div>
      <span slot="footer">
        <as-button @click="form.visible = false">cancel</as-button>
        <as-button type="primary" @click="form.visible = false">confirm</as-button>
      </span>
    </as-modal>
    <as-button type="text" plain @click="showModal">show dialog</as-button>
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
| show | Whether to show modal, should follow .sync | Boolean | false |
