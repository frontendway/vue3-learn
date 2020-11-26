<template>
  <keep-alive>
    <ChildA v-if="state.flag" />
    <ChildB v-else />
  </keep-alive>
  <button @click="toggle">toggle</button>
</template>

<script>
import ChildA from './child-a.vue'
import ChildB from './child-b.vue'
import { reactive } from 'vue'

export default {
  components: {
    ChildA,
    ChildB
  },
  setup () {
    const state = reactive({ flag: true })
    
    function toggle () {
      state.flag = !state.flag
    }

    return {
      state,
      toggle
    }
  }
}
</script>
