<template>
  <section>
    <h3>v-if block tree</h3>
    <div v-if="state.flag">{{ state.flag }}</div>
    <p v-else>{{ state.flag }}</p>
  </section>
</template>

<script>
/* 
  
*/
import { reactive } from 'vue'

export default {
  setup () {
    const state = reactive({ flag: true })

    return {
      state
    }
  }
}
</script>
