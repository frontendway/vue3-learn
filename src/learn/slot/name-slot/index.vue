<template>
  <layout>
    <template #header>
      <h1>{{ header }}</h1>
    </template>
    <template #default>
      <p>{{ main }}</p>
    </template>
    <template #footer>
      <p>{{ footer }}</p>
    </template>
  </layout>  
</template>

<script>
import Layout from './layout.vue'

export default {
  components: {
    layout: Layout
  },

  data () {
    return {
      header: 'header title',
      main: '正文内容',
      footer: '页脚内容'
    }
  }
}
</script>
