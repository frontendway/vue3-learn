<template>
  <slot name="testOne" :title="items[0]" />
  <slot name="testTwo" :title="items[1]" />
</template>

<script>
export default {
  data() {
    return {
      items: ['test a', 'test b']
    }
  }
}
</script>
