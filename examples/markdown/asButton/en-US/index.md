
# Button

button for operate.

## When To Use

When you need to show alert messages to users.

## Examples

### Basic use

:::demo

```html
<div class="row flex-row">
  <as-button>default button</as-button>
  <as-button class="info-button" style="margin-left:20px" type="info">info button</as-button>
  <as-button style="margin-left:20px" type="primary">primary button</as-button>
  <as-button style="margin-left:20px" type="success">success button</as-button>
  <as-button style="margin-left:20px" type="error">error button</as-button>
  <as-button style="margin-left:20px" type="warning">warning button</as-button>
</div>
```

:::

### plain

:::demo

```html
<div class="flex-row" style="margin-top: 10px">
  <as-button plain>default button</as-button>
  <as-button style="margin-left:20px" type="info" plain>info button</as-button>
  <as-button style="margin-left:20px" type="primary" plain>primary button</as-button>
  <as-button style="margin-left:20px" type="success" plain>success button</as-button>
  <as-button style="margin-left:20px" type="error" plain>error button</as-button>
  <as-button style="margin-left:20px" type="warning" plain>warning button</as-button>
</div>
```

:::

### round

:::demo

```html
<div class="flex-row" style="margin-top: 10px">
  <as-button round>default button</as-button>
  <as-button style="margin-left:20px" type="info" round>info button</as-button>
  <as-button style="margin-left:20px" type="primary" round>primary button</as-button>
  <as-button style="margin-left:20px" type="success" round>success button</as-button>
  <as-button style="margin-left:20px" type="error" round>error button</as-button>
  <as-button style="margin-left:20px" type="warning" round>warning button</as-button>
</div>
```

:::

### disabled

:::demo

```html
<div class="flex-row" style="margin-top: 10px">
  <as-button disabled>default button</as-button>
  <as-button style="margin-left:20px" type="info" disabled>info button</as-button>
  <as-button style="margin-left:20px" type="primary" disabled>primary button</as-button>
  <as-button style="margin-left:20px" type="success" disabled>success button</as-button>
  <as-button style="margin-left:20px" type="error" disabled>error button</as-button>
  <as-button style="margin-left:20px" type="warning" disabled>warning button</as-button>
</div>

<div class="flex-row" style="margin-top: 10px">
  <as-button disabled>default button</as-button>
  <as-button style="margin-left:20px" type="info" disabled plain>info button</as-button>
  <as-button style="margin-left:20px" type="primary" disabled plain>primary button</as-button>
  <as-button style="margin-left:20px" type="success" disabled plain>success button</as-button>
  <as-button style="margin-left:20px" type="error" disabled plain>error button</as-button>
  <as-button style="margin-left:20px" type="warning" disabled plain>warning button</as-button>
</div>
```

:::

### API

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| type | type of button | enum, enable value of default and info and primary and success and error and warning | default |
| disabled | disabled of button | boolean | false |
| plain | plain button | boolean | false |
| round | round button | boolean | false |
