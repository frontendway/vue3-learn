<template>
  <section>
    <h3>动态 props，测试 block 区块</h3>
    <div :key="state.key1">abc</div>
    <button @click="toggle">切换</button>
  </section>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup () {
    const state = reactive({ key1: 1 })

    function toggle () {
      state.key1 = state.key1 + 1
    }

    return {
      state,
      toggle
    }
  }
}
</script>
