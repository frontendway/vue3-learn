<template>
  <div>{{ state.count }}</div>
  <button @click="addCount">addCount</button>
</template>

<script>
import { reactive, watch } from 'vue'

export default {
  setup () {
    const state = reactive({ count: 0 })

    // 侦听 getter 函数，必须返回响应式对象
    watch(() => state.count, (count, prevCount) => {
      console.log('watch1', count, prevCount)
    })

    /* 
      不 return 则回调不会执行，因为每次求的值都是 undefined，新旧值没有发生变化，则不会执行回调函数
      但每次监听的 source 都会执行
      watch(() => {
        console.log(state.count)
      }, (count, prevCount) => {
        console.log('watch1', count, prevCount)
      })
    */

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
