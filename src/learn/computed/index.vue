<template>
  <p>{{ result }}</p>
  <button @click="plusOne">plus</button>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup () {
    const count = ref(0)
    const result = computed(() => count.value + 1)

    function plusOne () {
      count.value++
    }

    return {
      plusOne,
      result
    }
  }
}
</script>
