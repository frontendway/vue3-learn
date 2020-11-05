<template>
  <h2>hook 钩子函数</h2>
  <child-hook />
</template>

<script>
import { onMounted, onBeforeMount, onErrorCaptured } from 'vue'
import ChildHook from './child-hook.vue'

export default {
  components: {
    ChildHook
  },
  setup () {
    onErrorCaptured((err) => {
      console.log(err, 'err')
      return false
    })

    onBeforeMount(() => {
      console.log('parent-hook: onBeforeMount')
    })

    onMounted(() => {
      console.log('parent-hook1 onMounted')
    })

    onMounted(() => {
      console.log('parent-hook2 onMounted')
    })
  }
}
</script>
