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

/* 
  ref:
    1. 创建 Child 组件 vnode 时的 args 是 [type, {ref: 'child'}]
       生成的组件 vnode 的 ref 属性则是 { i: instance, r: 'child' }
       instance: 当前组件实例，对 child 组件而言则是父组件实例
    2. patch -> processComponent -> setRef
    3. queuePostRenderEffect(doSet, parentSuspense) 在组件渲染完毕后完成实例设置
*/

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
