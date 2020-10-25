<template>
  <p>{{ state.child }}</p>
</template>

<script>
import { reactive} from 'vue'

export default {
  setup () {
    const state = reactive({ child: 'child message' })
    
    return {
      state
    }
  }
}
</script>
