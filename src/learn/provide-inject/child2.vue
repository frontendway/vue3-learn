<template>
  <h4>child2 {{theme}}</h4>
</template>

<script>
import { inject } from 'vue'

export default {
  setup () {
    const theme = inject('theme')
    return {
      theme
    }
  }
}
</script>
