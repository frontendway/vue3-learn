<template>
  <div>{{ id }}</div>
  <button @click="addId">addId</button>
</template>

<script>
import {ref, watchEffect } from 'vue' 

export default {
  setup () {
    const id = ref(5000)
    watchEffect(onInvalidate => {
      console.log('watchEffect run')

      const timer = setTimeout(() => {
        console.log('setTimeout')
      }, id.value)

      onInvalidate(() => {
        console.log('onInvalidate' + timer)
        clearTimeout(timer)
      })
    })

    function addId () {
      id.value += 5000
    }

    return {
      id,
      addId
    }
  }
}
</script>
