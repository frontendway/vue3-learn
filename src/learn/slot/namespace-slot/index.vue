<template>
  <list>
    <template v-slot:default="slotProps">
      <i class="icon icon-check"></i>
      <span class="green">{{ slotProps.item }}</span>
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
