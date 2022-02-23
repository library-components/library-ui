## Icon

A set of commonly used icons is provided.

### Instructions

You can use it directly by setting the class name as `as-icon-iconName`. E.g:

:::demo
```html
<i class="as-icon-edit"></i>
<i class="as-icon-share-fill"></i>
<i class="as-icon-delete"></i>
<as-button type="primary" icon="as-icon-search">search</as-button>

```
:::

### Icon collection

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'as-icon-' + name"></i>
      <span class="icon-name">{{'as-icon-' + name}}</span>
    </span>
  </li>
</ul>
