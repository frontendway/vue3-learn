<template>
  <div>
    <p>parent</p>
    <Child :msg="msg" />
    <button @click="toggle">toggle</button>
  </div>
</template>

<script>
import Child from './child.vue'

export default {
  data () {
    return {
      msg: 'hello vue'
    }
  },
  components: {
    Child
  },
  methods: {
    toggle () {
      this.msg = this.msg === 'hello vue' ? 'hello msg' : 'hello vue'
    }
  }
}
</script>
