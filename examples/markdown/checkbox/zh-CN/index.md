## Checkbox 复选框

## 基础使用

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 的文案。

:::demo 在`as-checkbox`元素中定义`v-model`绑定变量，单一的`checkbox`中，默认绑定变量的值会是`Boolean`，选中为`true`。

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

复选框的按钮形式

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

## 复选框组

`as-checkbox-group`中可防止一组复选框或复选按钮

:::demo `as-checkbox-group`可通过v-model绑定变量，变量类型是一个数组，数组的每一个值是复选框的label

```html
<as-row>
  <as-checkbox-group v-model="checkList">
    <as-checkbox border label="复选框"></as-checkbox>
    <as-checkbox border label="复选框1"></as-checkbox>
    <as-checkbox border disabled label="复选框2"></as-checkbox>
  </as-checkbox-group>
</as-row>

<as-row style="margin-top: 20px;">
  <as-checkbox-group v-model="checkList">
    <as-checkbox label="无border1"></as-checkbox>
    <as-checkbox label="无border2"></as-checkbox>
    <as-checkbox disabled label="无border3"></as-checkbox>
  </as-checkbox-group>
</as-row>

<as-row style="margin-top: 20px;">
  <as-checkbox-group v-model="checkList">
    <as-checkbox border label="复选框3"></as-checkbox>
    <as-checkbox border label="复选框4"></as-checkbox>
    <as-checkbox border disabled label="复选框5"></as-checkbox>
  </as-checkbox-group>
</as-row>

<as-row style="margin-top: 20px;">
  <as-checkbox-group v-model="checkList">
    <as-checkbox-button label="复选按钮1"></as-checkbox-button>
    <as-checkbox-button label="复选按钮2"></as-checkbox-button>
    <as-checkbox-button disabled label="复选按钮3"></as-checkbox-button>
  </as-checkbox-group>
</as-row>

<as-row style="margin-top: 20px;">
  <as-checkbox-group v-model="checkList">
    <as-checkbox-button success direction="top-left" label="图标按钮1"></as-checkbox-button>
    <as-checkbox-button success direction="top-right" label="图标按钮2"></as-checkbox-button>
    <as-checkbox-button success label="图标按钮3"></as-checkbox-button>
    <as-checkbox-button success disabled label="图标按钮4"></as-checkbox-button>
  </as-checkbox-group>
</as-row>

<script>
  export default {
    data () {
      return {
        checkList: ['复选框2', '图标按钮4']
      }
    },
    watch: {
      checkList (newValue) {
        console.log("checklist: ", newValue)
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

### Checkbox API

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | boolean | — | false |
| label     | 选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效）| string / number / boolean  |       —        |     —    |
| disabled  | 是否禁用    | boolean   |  — | false   |
| border  | 是否显示边框  | boolean   | — | false   |

### Checkbox 事件

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 当绑定值变化时触发的事件 | 更新后的值 |

### Checkbox-group API

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | array | — | — |

### Checkbox-group 事件

| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 当绑定值变化时触发的事件 | 更新后的值 |

### Checkbox-button API

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value/v-model | 绑定值 | boolean | - | - |
| label     | 选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效）| string / number / boolean  |       —        |     —    |
| disabled  | 是否禁用    | boolean   |  — | false   |
| direction | 图标位置 | string | top-left / top-right / right-bottom | right-bottom |
