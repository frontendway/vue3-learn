<template>
  <div @click="editorProps">点击修改 props</div>
  <Child3 
    :title="state.title"
    content="content"
  />
</template>

<script>
/* 
  <Child1 
    :title="state.title" 
    :content="state.content"
  />
  <Child2 
    :title="state.title"
    :content="state.content"
  />
  <Child4
    :title="state.title"
    content=""
  />
*/
import { reactive } from 'vue'
import Child1 from './child1.vue'
import Child2 from './child2.vue'
import Child3 from './child3.vue'
import Child4 from './child4.vue'

/* 
  props 的初始化过程，是在父组件还是子组件中的初始化中设置成响应式的
  父组件的 props 改变是如何触发子组件的重新渲染的
  为什么是 shallowReactive
  子组件修改 props 触发报错的原理

  props:
    1.创建组件 vnode 时会将 props 作为参数传递给 vnode 的 props 熟悉
    2.创建组件实例时、执行 normalizePropsOptions 标准化 props 配置方便用户支持各种配置写法
    3.setupComponent -> initProps
      根据 propsOptions 解析出子组件接收的 props 数据
      校验
      将 props 转为响应式
*/

export default {
  components: {
    Child1,
    Child2,
    Child3,
    Child4
  },
  setup () {
    const state = reactive({
      title: 'props 标题',
      content: 'content 正文段落'
    })

    function editorProps () {
      state.title = 'new props 标题'
    }

    return {
      editorProps,
      state
    }
  }
}
</script>
