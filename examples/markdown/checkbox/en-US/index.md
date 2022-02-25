## Checkbox

## Basic use

It can be used alone to indicate a switch between two states, and the content written in the label is the text of checkbox.

:::demo Define the `v-model` binding variable in the `as-checkbox` element. In a single `checkbox`, the default binding variable value will be `Boolean`, and `true` is selected.

```html
  <template>
    <as-checkbox v-model="checked">checkbox</as-checkbox>
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

## check button

button form of checkbox

:::demo The check button has two styles: declare the `success` attribute to have the style of the selected success icon, then you can declare the direction attribute to control the position of the icon

```html
  <template>
    <as-checkbox-button v-model="checked">check button</as-checkbox-button>
    <as-checkbox-button v-model="checked3" success direction="top-left">icon button</as-checkbox-button>
    <as-checkbox-button v-model="checked2" success direction="top-right">icon button</as-checkbox-button>
    <as-checkbox-button v-model="checked1" success>icon button</as-checkbox-button>
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

## with border

:::demo Checkboxes can be bordered by adding the `border` property

```html
<as-checkbox border v-model="checked">checkbox</as-checkbox>

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

## Checkbox group

A group of checkboxes or check buttons can be placed in `as-checkbox-group`

:::demo `as-checkbox-group` can bind variables through v-model, the variable type is an array, and each value of the array is the label of the checkbox

```html
<as-row>
  <as-checkbox-group v-model="checkList">
    <as-checkbox border label="checkbox"></as-checkbox>
    <as-checkbox border label="checkbox1"></as-checkbox>
    <as-checkbox border disabled label="checkbox2"></as-checkbox>
  </as-checkbox-group>
</as-row>

<as-row style="margin-top: 20px;">
  <as-checkbox-group v-model="checkList">
    <as-checkbox label="no border1"></as-checkbox>
    <as-checkbox label="no border2"></as-checkbox>
    <as-checkbox disabled label="no border3"></as-checkbox>
  </as-checkbox-group>
</as-row>

<as-row style="margin-top: 20px;">
  <as-checkbox-group v-model="checkList">
    <as-checkbox border label="checkbox3"></as-checkbox>
    <as-checkbox border label="checkbox4"></as-checkbox>
    <as-checkbox border disabled label="checkbox5"></as-checkbox>
  </as-checkbox-group>
</as-row>

<as-row style="margin-top: 20px;">
  <as-checkbox-group v-model="checkList">
    <as-checkbox-button label="check button1"></as-checkbox-button>
    <as-checkbox-button label="check button2"></as-checkbox-button>
    <as-checkbox-button disabled label="check button3"></as-checkbox-button>
  </as-checkbox-group>
</as-row>

<as-row style="margin-top: 20px;">
  <as-checkbox-group v-model="checkList">
    <as-checkbox-button success direction="top-left" label="icon button1"></as-checkbox-button>
    <as-checkbox-button success direction="top-right" label="icon button2"></as-checkbox-button>
    <as-checkbox-button success label="icon button3"></as-checkbox-button>
    <as-checkbox-button success disabled label="icon button4"></as-checkbox-button>
  </as-checkbox-group>
</as-row>

<script>
  export default {
    data () {
      return {
        checkList: ['checkbox2', 'icon button4']
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

## disabled state

:::demo

```html
  <as-checkbox disabled>checkbox</as-checkbox>
  <as-checkbox v-model="checked3" disabled>checked and disabled</as-checkbox>
  <as-checkbox border v-model="checked1" disabled>checkbox</as-checkbox>
  <as-checkbox border v-model="checked2" disabled>checkbox</as-checkbox>
  <as-checkbox-button disabled v-model="checked4">check button</as-checkbox-button>
  <as-checkbox-button disabled success>icon button</as-checkbox-button>
  <as-checkbox-button disabled success v-model="checked">icon button</as-checkbox-button>

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
