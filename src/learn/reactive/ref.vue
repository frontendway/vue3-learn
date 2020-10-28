<template>
  <div>
    <p>{{ refState }}</p>
    <button @click="random">Random msg</button>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  setup() {
    const refState = ref('msg ref')

    const random = function() {
      refState.value = Math.random()
    }

    return {
      random,
      refState
    }
  }
}
</script>
