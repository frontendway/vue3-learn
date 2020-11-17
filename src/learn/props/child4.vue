<template>
  <h3>{{ title }}</h3>
  <p>{{ content }}</p>
  <button @click="changeTitle">子组件修改 props 数据</button>
</template>

<script>
import { watchEffect } from 'vue'

export default {
  props: {
    title: String,
    content: [Boolean, String]
  },

  setup (props) {
    watchEffect(() => {
      debugger
      console.log(props.title)
    })

    function changeTitle () {
      props.title = '新的 title'
    }

    return {
      changeTitle
    }
  }
}
</script>
