<template>
  <section>
    <h3>单文件组件，测试 block 区块</h3>
    <div>{{ state.content }}</div>
  </section>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup () {
    const state = reactive({ content: '我是正文内容' })

    return {
      state
    }
  }
}
</script>
