<template>
  <div>
    <p>{{ state.msg }}</p>
    <button @click="toggle">toggle</button>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup () {
    const state = reactive({ msg: 'hello vue' })

    function toggle () {
      state.msg = 'hello msg'
    }

    return {
      state,
      toggle
    }
  }
}
</script>
