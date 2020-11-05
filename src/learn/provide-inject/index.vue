<template>
  <h3>parent</h3>
  <Child1 />
</template>

<script>
import { provide, ref } from 'vue'
import Child1 from './child1.vue'

export default {
  components: {
    Child1
  },
  setup () {
    provide('theme', ref('根组件'))
  }
}
</script>
