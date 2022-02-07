
# Modal

Alert component for feedback.

## When To Use

When you need to show alert messages to users.

## Examples
### Basic use
:::demo
```html
<template>
  <div >
    <a-modal :visible.sync="form.visible">
      <template #content>
        <div style="height:100vh;">slot content</div>
      </template>
    </a-modal>
    <button @click="showModal">showModal</button>
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

### Customize define close
:::demo
```html
<template>
  <div >
    <a-modal :visible.sync="form.visible">
      <template #content>
        <div style="height:100vh;">slot content</div>
      </template>
    </a-modal>
    <button @click="showModal">showModal</button>
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
    <a-modal :visible.sync="form.visible">
      <template #content>
        <div style="height:100%;">slot content</div>
      </template>
    </a-modal>
    <button @click="showModal">showModal</button>
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
