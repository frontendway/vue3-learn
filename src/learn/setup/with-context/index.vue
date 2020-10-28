<template>
  <HelloWorld :msg="msg" @toggle="toggle" />
</template>

<script>
import HelloWorld from './HelloWorld.vue'
import { ref } from 'vue'

export default {
  components: {
    HelloWorld
  },
  setup () {
    const msg = ref('hello world')
    function toggle () {
      msg.value = msg.value === 'hello world' ? 'hello vue' : 'hello world'
    }
    return {
      toggle,
      msg
    }
  }
}
</script>
