<template>
  <h3>我是父组件</h3>
  <VButton>
    <span>我是button组件的插槽内容</span>
  </VButton>
</template>

<script>
/* 
  存储插槽的组件 patchFlag 是 undefined，创建 vnode 的过程取默认值 0
  shapeFlag 是 stateful_component(4) | slots_children(32) 也就是 36
*/
import VButton from './button.vue'

export default {
  components: {
    VButton
  }
}
</script>
