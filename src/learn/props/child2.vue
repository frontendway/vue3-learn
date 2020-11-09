<template>
  <h3>{{ title }}</h3>
  <p>{{ content }}</p>
</template>

<script>
export default {
  props: {
    title: String,
    content: [Boolean, String]
  }
}
</script>
