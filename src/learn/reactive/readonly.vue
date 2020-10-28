<template>
  <div>
    <p>{{ state.msg }}</p>
    <button @click="random">Random msg</button>
  </div>
</template>
<script>
import { readonly } from 'vue'

export default {
  setup() {
    const state = readonly({
      msg: 'msg reactive'
    })

    const random = function() {
      state.msg = Math.random()
    }

    return {
      random,
      state
    }
  }
}
</script>
