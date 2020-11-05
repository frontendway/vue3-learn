<template>
  <h4>child1 {{theme}}</h4>
  <Child2 />
</template>

<script>
import { provide, ref, inject } from 'vue'
import Child2 from './child2.vue'

export default {
  components: {
    Child2
  },
  setup () {
    const theme = inject('theme')

    // 当前取 theme 值与 provide 设置值的位置有关系
    provide('theme', ref('子组件'))
    
    return {
      theme
    }
  }
}
</script>
