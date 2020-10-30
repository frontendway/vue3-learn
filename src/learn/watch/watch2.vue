<template>
  <div>{{ count }}</div>
  <button @click="addCount">addCount</button>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  setup () {
    const count = ref(0)

    // 直接侦听响应式对象
    watch(count, (count, prevCount) => {
      console.log('watch2', count, prevCount)
    })

    function addCount () {
      count.value++
    }

    return {
      addCount,
      count
    }
  }
}
</script>
