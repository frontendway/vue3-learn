<template>
  <p>我是静态p标签</p>
  <ul>
    <li>
      {{ state.msg }}
      <div>{{ state.msg1 }}</div>
    </li>
  </ul>
  <Child ref="child" />
  <button @click="editor">editor</button>
</template>

<script>
import { reactive } from 'vue'
import Child from './child.vue'

export default {
  name: 'App',
  components: {
    Child
  },
  mounted () {
    console.log(this.$refs.child.$el)
  },
  setup () {
    const state = reactive({ 
      msg: 'message',
      msg1: 'message1'
    })

    function editor () {
      state.msg = 'new message'
    }

    return {
      editor,
      state
    }
  }
}
</script>
