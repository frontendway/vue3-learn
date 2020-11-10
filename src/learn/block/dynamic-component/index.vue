<template>
  <section>
    <h3>动态组件，测试 block 区块</h3>
    <component :is="state.dynamic" />
    <button @click="toggle">切换组件</button>
    <keep-alive>
      <component :is="state.dynamic" />
    </keep-alive>
  </section>
</template>

<script>
/* 
  非动态组件即普通组件也会被推入 block 中
*/
import { reactive } from 'vue'
import Dynamic1 from './dynamic1.vue'
import Dynamic2 from './dynamic2.vue'

export default {
  components: {
    Dynamic1,
    Dynamic2
  },

  setup () {
    const state = reactive({ dynamic: 'Dynamic1' })

    function toggle () {
      state.dynamic = state.dynamic === 'Dynamic1' ? 'Dynamic2' : 'Dynamic1'
    }

    return {
      state,
      toggle
    }
  }
}
</script>
