<template>
  <h3>钩子函数</h3>
</template>

<script>
import { onMounted } from 'vue'

export default {
  setup () {
    onMounted(() => {
      console.log('onMounted')
    })
  }
}
</script>
