<template>
  <layout>
    <template v-slot:header>
      <h1>{{ header }}</h1>
    </template>
    <template v-slot:default>
      <p>{{ main }}</p>
    </template>
    <template v-slot:footer>
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
