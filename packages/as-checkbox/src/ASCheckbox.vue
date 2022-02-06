<template>
  <label class="switch column-center">
    <input
      class="checkbox-input"
      id="checkbox"
      type="checkbox"
      :style="{background: checked ? color:''}"
      @change="change"
    />
    <label class="checkbox" for="checkbox" :style="{background:  checked ? color:''}"></label>
    <span :style="{color: labelColor ? labelColor:color}">{{name}}</span>
  </label>
</template>

<script>
export default {
  name: "ACheckbox",
  props: {
    color: {
        type: String,
        default: '#57ad68'
    },
    labelColor: {
        type: String,
        default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
        checked: false   
    }
  },
  methods: {
    change (e) {
      this.checked = !this.checke;
    }
  }
};
</script>

<style scoped>
.switch {
  height: 2rem;
}
.checkbox-input {
  display: none;
}
.checkbox {
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
  background-color: #fff;
  border: 1px solid #d7d7d7;
  border-radius: 3px;
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin: 0 5px;
  position: relative;
  cursor: pointer;
}
.checkbox::after {
    content: '\2714';
    display: inline-flex;
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
    align-items: center;
}
</style>