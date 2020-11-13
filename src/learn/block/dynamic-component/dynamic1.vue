<template>
  <section>
    <h4>{{ state.message }}</h4>
    <p>content</p>
  </section>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup () {
    const state = reactive({ message: 'daynamicMessage' })

    return {
      state
    }
  }
}
</script>
