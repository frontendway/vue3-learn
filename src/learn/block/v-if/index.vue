<template>
  <section>
    <h3>v-if block tree</h3>
    <div v-if="state.flag">
      <h3>{{ state.flag }}</h3>
    </div>
    <p v-else>
      <span>{{ state.flag }}</span>
    </p>
    <button @click="state.flag = !state.flag">toggle</button>
  </section>
</template>

<script>
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
