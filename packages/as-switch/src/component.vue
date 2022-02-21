<template>
  <div class="switch-slide flex-inline secondary-center" :class="[{'is-disabled': switchDisabled}]" @click.prevent="switchValue">
    <input type="checkbox" ref="input" :disabled="switchDisabled" hidden @change="handleChange" @keydown.enter="switchValue" />
    <span class="switch-label" :class="[{'switch-left-label': inactiveText}, !checked ? 'is-active' : '']">{{ inactiveText }}</span>
    <span class="switch-slide-label" ref="core" :class="[{ 'switch-slide-checked': checked }]"></span>
    <span class="switch-label" :class="[{'switch-right-label': activeText},checked ? 'is-active' : '']">{{ activeText }}</span>
  </div>
</template>

<script>
export default {
  name: "AsSwitch"
};
</script>
