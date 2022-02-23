## Checkbox 复选框

## 基础使用

:::demo

```html
  <template>
    <as-checkbox v-model="checked">复选框</as-checkbox>
  </template>
  <script>
    export default {
      data () {
        return {
          checked: false
        }
      },
      watch: {
        checked (newValue) {
          console.log("newValue: ", newValue)
        }
      }
    }
  </script>
```

:::

## 禁用状态

:::demo

```html
  <template>
    <as-checkbox v-model="checked" disabled>复选框</as-checkbox>
  </template>
  <script>
    export default {
      data () {
        return {
          checked: false
        }
      },
      watch: {
        checked (newValue) {
          console.log("newValue: ", newValue)
        }
      }
    }
  </script>
```

:::
