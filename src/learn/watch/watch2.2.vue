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

    // 执行 runner 时 state a b 都会收集到当前激活的 activeEffect 也就是 runner
    watch(() => count.state.a.b, (newVal, oldVal) => { 
      console.log(newVal, oldVal)
    })

    function addCount () {
      count.state.a.b++
    }

    return {
      addCount,
      count
    }
  }
}
</script>
