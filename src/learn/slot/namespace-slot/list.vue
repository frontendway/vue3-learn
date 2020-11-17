<template>
  <ul>
    <li v-for="(item, index) in items">
      <slot :item="item"></slot>
    </li>
  </ul>
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
