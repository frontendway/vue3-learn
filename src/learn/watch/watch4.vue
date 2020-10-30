<template>
  <div>{{ state.count }}</div>
  <button @click="addCount">addCount</button>
</template>

<script>
import { reactive, watchEffect } from 'vue'

export default {
  setup () {
    const state = reactive({ count: 0 })

    // 当访问的响应式数据变化后自动执行此回调
    watchEffect(() => {
      console.log(state.count)
    })

    function addCount () {
      state.count++
    }

    return {
      addCount,
      state
    }
  }
}
</script>
