<template>
  <transition name="fade" :appear="true">
    <div v-if="state.ok">toggled content</div>
  </transition>
  <button @click="toggle">toggle</button>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup() {
    const state = reactive({ ok: true })

    function toggle() {
      state.ok = !state.ok
    }

    return {
      state,
      toggle
    }
  }
}
</script>

<style>
.fade-enter-from,.fade-leave-to{
  opacity: 0;
}
.fade-enter-active,.fade-leave-active{
  transition: all 15s linear 0s;
}
</style>
