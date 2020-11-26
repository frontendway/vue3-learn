<template>
  <h1>component teleport</h1>
  <teleport 
    to="#dailog" 
    :disabled="state.disabled"
  >
    <Child />
  </teleport>
  <button @click="toggle">toggle teleport</button>
</template>

<script>
import { reactive } from 'vue'
import Child from './child.vue'

export default {
  components: {
    Child
  },
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
