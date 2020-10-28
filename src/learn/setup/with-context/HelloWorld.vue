<template>
  <p>{{ msg }}</p>
  <button @click="onClick">toggle</button>
</template>

<script>
export default {
  props: {
    msg: String
  },
  setup (props, { emit }) {
    function onClick () {
      emit('toggle')
    }

    return {
      onClick
    }
  }
}
</script>
