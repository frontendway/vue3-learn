<template>
  <button 
    @click="increment"
  >
    Count is: {{ state.count }}
  </button>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 0
    })

    function increment() {
      state.count++
    }
    
    return {
      state,
      increment
    }
  }
}
</script>
