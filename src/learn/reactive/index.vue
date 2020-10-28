<template>
  <div>
    <p>{{ state.msg.subMsg }}</p>
    <button @click="random">Random msg</button>
  </div>
</template>
<script>
import { reactive } from 'vue'

export default {
  setup() {
    const state = reactive({
      msg: {
        subMsg: 'msg reactive',
        a: {
          b: {
            c: {}
          }
        }
      }
    })

    const random = function() {
      state.msg.subMsg = Math.random()
    }

    return {
      random,
      state
    }
  }
}
</script>
