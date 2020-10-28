<template>
  <button 
    @click="random"
  >
    {{ msg }}
  </button>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const msg = ref('msg from setup')
    return {
      msg
    }
  },
  data () {
    return {
      msg: 'msg from data'
    }
  },
  methods: {
    random () {
      this.msg = Math.random()
    }
  }
}
</script>
