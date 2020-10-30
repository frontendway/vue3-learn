<template>
  <div>{{ count1 }}</div>
  <div>{{ count2 }}</div>
  <button @click="addCount">addCount</button>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  setup () {
    const count1 = ref(0)
    const count2 = ref(1)

    // 侦听多个响应式对象
    watch([count1, count2], ([count1, count2], [preCount1, preCount2]) => { 
      console.log('watch3', count1, count2, preCount1, preCount2)
    })

    function addCount () {
      count1.value++
      count2.value++
    }

    return {
      addCount,
      count1,
      count2
    }
  }
}
</script>
