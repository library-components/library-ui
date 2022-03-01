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
          radio: '0'
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
  <as-radio-group v-model="radio" @change="changeRadio">
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
      },
      methods: {
        changeRadio (value) {
          console.log("change：", value)
        }
      }
    }
  </script>
```

:::

## 带边框

:::demo

```html
  <as-row>
    <as-radio border>带边框</as-radio>
    <as-radio border disabled>禁用</as-radio>
  </as-row>

  <as-row style="margin-top:10px">
    <as-radio-group v-model="radio">
      <as-radio border v-for="(item, index) in radios" :key="index" :label="item.value">{{ item.label }}</as-radio>
    </as-radio-group>
  </as-row>

  <script>
    export default {
      data () {
        return {
          radios: [{
            label: '第一',
            value: 1
          }, {
            label: '第二',
            value: 2
          }, {
            label: '第三',
            value: 3
          }, {
            label: '第四',
            value: 8
          }],
          radio: 0
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

:::

## Radio API

| 属性 | 描述 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :---| :--- | :--- |
| value / v-model | 绑定值 | - | - | - |
| label | 按钮选中值 | - | - |
| type | 按钮类型 | string | primary / success / error / info / danger | primary |
| disabled | 是否禁用 | boolean | true / false | false |
| border | 边框 | boolean | true / false | false |
| name | 按钮name | string | - | - |

## Radio Event

| 属性 | 描述 | 返回值 |
| :--- | :--- | :--- | :--- |
| change | 按钮值发生变化触发的事件 | value |

## Radio Group API

| 属性 | 描述 | 类型 | 可选值 | 默认值 |
| :--- | :--- | :---| :--- | :--- |
| value / v-model | 绑定值 | - | - | - |

## RadioGroup Event

| 属性 | 描述 | 返回值 |
| :--- | :--- | :--- | :--- |
| change | 按钮值发生变化触发的事件 | value |
