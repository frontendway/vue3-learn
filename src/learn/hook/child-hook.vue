<template>
  <h3>child-hook 钩子函数</h3>
  <button @click="abc">abc</button>
</template>

<script>
import { onMounted, onBeforeMount } from 'vue'

export default {
  setup () {
    
    // 运行时错误会被上层组件的 onErrorCaptured 捕获
    console.log(a + 1)

    onBeforeMount(() => {
      console.log('child-hook: onBeforeMount')
    })

    onMounted(() => {
      console.log('child-hook1 onMounted')
    })

    onMounted(() => {
      console.log('child-hook2 onMounted')
    })
  }
}
</script>
