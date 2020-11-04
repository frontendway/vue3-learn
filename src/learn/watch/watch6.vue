<template>
  <div>{{ id }}</div>
  <button @click="addId">addId</button>
</template>

<script>
import {ref, watch } from 'vue' 

export default {
  setup () {
    const id = ref(5000)
    watch(id, () => {
      id.value++
    })

    function addId () {
      id.value += 1
    }

    return {
      id,
      addId
    }
  }
}
</script>
