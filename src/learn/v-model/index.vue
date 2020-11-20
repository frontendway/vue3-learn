<template>
  <input type="text" v-model="text" />
  {{ text }}
  <!-- <custom-input v-model="text"></custom-input> -->
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  }
}
</script>
