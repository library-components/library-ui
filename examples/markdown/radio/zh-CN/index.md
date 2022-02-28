## Radio 单选框

## 基本使用

:::demo

```html
  <as-radio v-model="radio" label="1">单选框</as-radio>
  <as-radio v-model="radio" label="2">单选框</as-radio>

  <script>
    export default {
      data () {
        return {
          radio: '1'
        }
      },
      watch: {
        radio (newValue) {
          console.log("radio: ", newValue)
        }
      }
    }
  </script>
```

:::

## 单选按钮组

:::demo

```html
  <as-radio-group v-model="radio">
    <as-radio :label="3">备选项</as-radio>
    <as-radio :label="6">备选项</as-radio>
    <as-radio :label="9">备选项</as-radio>
  </as-radio-group>

  <script>
    export default {
      data () {
        return {
          radio: 3
        };
      },
      watch: {
        radio (newValue) {
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
  <as-radio v-model="radio" label="1" disabled>禁用</as-radio>
  <as-radio v-model="radio" label="2" disabled>禁用</as-radio>

  <script>
    export default {
      data () {
        return {
          radio: '1'
        }
      }
    }
  </script>
```
