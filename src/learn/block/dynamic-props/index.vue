<template>
  <section>
    <h3>动态 props，测试 block 区块</h3>
    <Dynamic1 :active="state.active" />
    <button @click="toggle">切换</button>
  </section>
</template>

<script>
import { reactive } from 'vue'
import Dynamic1 from './dynamic1.vue'

export default {
  components: {
    Dynamic1
  },

  setup () {
    const state = reactive({ active: true })

    function toggle () {
      state.active = !state.active
    }

    return {
      state,
      toggle
    }
  }
}
</script>