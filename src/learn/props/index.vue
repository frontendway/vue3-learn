<template>
  <div @click="editorProps">点击修改 props</div>
  <Child4
    :title="state.title"
    content=""
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
  <Child3 
    :title="state.title"
    content="content"
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
  props 初始化过程
    1.创建组件 vnode 时会将 props 作为参数传递给 vnode 的 props 属性
    2.创建组件实例时、执行 normalizePropsOptions 标准化 props 配置方便用户支持各种配置写法
    3.setupComponent -> initProps
      根据 propsOptions 解析出子组件接收的 props 数据
      校验
      将 props 转为响应式
  

  为什么是 shallowReactive？
  子组件修改 props 触发报错的原理？

  props 的初始化过程，是在父组件还是子组件中的初始化中设置成响应式的？
    子组件中 initProps 中通过 shallowReactive 设置成响应式

  父组件 props 改变是如何触发子组件的重新渲染的？
    1.父组件修改了数据、父组件重新渲染、diff 到子组件执行 updateComponent
    2.shouldUpdateComponent 对比 props 是否一致、不一致返回 true
    3.instance.next = n2、instance.update 更新子组件、其实就是执行 componentEffect 函数
    4.updateComponentPreRender -> updateProps 更新为最新的 props 数据
    5.一旦重新赋值，就会通知观测了 props 的 scheduler
    6.flushPreFlushCbs 强制执行观测了的 props 变化的函数执行
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
