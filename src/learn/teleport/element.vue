<template>
  <h1>test teleport</h1>
  <teleport to="#dailog" :disabled="state.disabled">
    <p>我是 dailog 中的内容</p>
  </teleport>
  <button @click="toggle">to inner view</button>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup () {
    const state = reactive({ disabled: true })
    
    function toggle () {
      state.disabled = !state.disabled
    }

    return {
      state,
      toggle
    }
  }
}
</script>
