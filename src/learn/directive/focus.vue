<template>
  <input v-focus type="text" />
</template>

<script>
export default {
  directives: {
    focus (el, binding, vnode) {
      el.focus()
    }
  }
}
</script>
