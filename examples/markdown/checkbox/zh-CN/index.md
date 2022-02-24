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

## 复选按钮

:::demo 复选按钮有两种样式: 声明`success`属性是有选中成功图标样式的，这时可以声明direction属性控制图标的位置

```html
  <template>
    <as-checkbox-button v-model="checked">复选按钮</as-checkbox-button>
    <as-checkbox-button v-model="checked3" success direction="top-left">带图标的复选按钮</as-checkbox-button>
    <as-checkbox-button v-model="checked2" success direction="top-right">带图标的复选按钮</as-checkbox-button>
    <as-checkbox-button v-model="checked1" success>带图标的复选按钮</as-checkbox-button>
  </template>
  <script>
    export default {
      data () {
        return {
          checked: false,
          checked1: false,
          checked2: false,
          checked3: false
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

## 带边框

:::demo 可以通过添加`border`属性给复选框加上边框

```html
<as-checkbox border v-model="checked">复选框</as-checkbox>

<script>
  export default {
    data () {
      return {
        checked: false
      }
    }
  }
</script>
```

:::

## 禁用状态

:::demo

```html
  <as-checkbox disabled>复选框</as-checkbox>
  <as-checkbox v-model="checked3" disabled>选中且禁用</as-checkbox>
  <as-checkbox border v-model="checked1" disabled>复选框</as-checkbox>
  <as-checkbox border v-model="checked2" disabled>复选框</as-checkbox>
  <as-checkbox-button disabled v-model="checked4">复选按钮</as-checkbox-button>
  <as-checkbox-button disabled success>带图标的复选按钮</as-checkbox-button>
  <as-checkbox-button disabled success v-model="checked">复选按钮</as-checkbox-button>

  <script>
    export default {
      data () {
        return {
          checked: true,
          checked1: false,
          checked2: true,
          checked3: true,
          checked4: true
        }
      }
    }
  </script>
```

:::
