<template>
  <list>
    <template #testOne="slotProps">
      <span>{{ slotProps.title }}</span>
    </template>
    <template #testTwo="slotProps">
      <span>{{ slotProps.title }}</span>
    </template>
  </list>
</template>

<script>
import list from './list.vue'

export default {
  components: {
    list
  }
}
</script>
