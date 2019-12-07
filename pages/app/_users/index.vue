<template>
  <v-content>
    <h1>Welcome {{ username }}!</h1>
  </v-content>
</template>

<script>
export default {
  computed: {
    username () {
      console.log(this.$nuxt.$route)
      return this.$nuxt.$route.params.users
    }
  }
}
</script>

<style>

</style>
