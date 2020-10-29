<template>
  <p>{{ two }}</p>
  <button @click="changeCount">plus</button>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup () {
    const count = ref(0)
    const one = computed(() => count.value + 1)
    const two = computed(() => one.value + 1)

    function changeCount () {
      count.value++
    }

    return {
      changeCount,
      two
    }
  }
}
</script>
