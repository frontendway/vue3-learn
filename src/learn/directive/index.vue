<template>
  <p v-if="flag">{{ msg }}</p>
  <input v-else v-log v-model="text"/>
  <button @click="flag = !flag">toggle</button>
</template>

<script>
export default {
  data () {
    return {
      flag: true,
      msg: 'Hello Vue',
      text: ''
    }
  }
}
</script>
