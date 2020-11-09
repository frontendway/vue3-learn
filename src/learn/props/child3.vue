<template>
  <h3>{{ title }}</h3>
  <p>{{ content }}</p>
  <p>{{ content1 }}</p>
</template>

<script>
/* 
  外部只传入 content 数据
  props 的类型数组中有 Boolean 类型，并且 Boolean 的索引小于 String 的索引
    content 这个 key 在父组件传递的 props 集合中，value === '' || value === 'content' 都返回 true
    content1 这个 key 不在父组件传递的 props 对象中，则返回 false
*/

export default {
  props: {
    title: String,
    content: [Boolean, String],
    content1: [Boolean, String]
  }
}
</script>
