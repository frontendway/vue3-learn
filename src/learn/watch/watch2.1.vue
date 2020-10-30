<template>
  <div>{{ count.state }}</div>
  <button @click="addCount">addCount</button>
</template>

<script>
import { watch, reactive } from 'vue'

export default {
  setup () {
    const count = reactive({
      state: {
        a: {
          b: 1
        }
      }
    })

    /* 
      监听深层次的响应式对象，分析 traverse 次数
      在执行 watch 函数的时候未执行 runner 之前会访问 count.state
      此时 activeEffect 是 undefined 所以并不会做依赖收集
    */
    const unWatch = watch(count.state, (newVal, oldVal) => { 
      console.log(newVal, oldVal)
    })

    function addCount () {
      debugger
      if (count.state.a.b === 2) {
        unWatch()
      }
      count.state.a.b++
    }

    return {
      addCount,
      count
    }
  }
}
</script>
