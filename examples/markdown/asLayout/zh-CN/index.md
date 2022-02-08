# Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

### 基础布局

:::demo

```html
<as-row>
  <as-col :span="24"><div class="grid-content bg-purple-dark"></div></as-col>
</as-row>
<as-row>
  <as-col :span="12"><div class="grid-content bg-purple"></div></as-col>
  <as-col :span="12"><div class="grid-content bg-purple-light"></div></as-col>
</as-row>
<as-row>
  <as-col :span="8"><div class="grid-content bg-purple"></div></as-col>
  <as-col :span="8"><div class="grid-content bg-purple-light"></div></as-col>
  <as-col :span="8"><div class="grid-content bg-purple"></div></as-col>
</as-row>
<as-row>
  <as-col :span="6"><div class="grid-content bg-purple"></div></as-col>
  <as-col :span="6"><div class="grid-content bg-purple-light"></div></as-col>
  <as-col :span="6"><div class="grid-content bg-purple"></div></as-col>
  <as-col :span="6"><div class="grid-content bg-purple-light"></div></as-col>
</as-row>
<as-row>
  <as-col :span="4"><div class="grid-content bg-purple"></div></as-col>
  <as-col :span="4"><div class="grid-content bg-purple-light"></div></as-col>
  <as-col :span="4"><div class="grid-content bg-purple"></div></as-col>
  <as-col :span="4"><div class="grid-content bg-purple-light"></div></as-col>
  <as-col :span="4"><div class="grid-content bg-purple"></div></as-col>
  <as-col :span="4"><div class="grid-content bg-purple-light"></div></as-col>
</as-row>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```
