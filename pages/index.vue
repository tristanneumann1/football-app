<template>
  <v-container class="home">
    <v-layout column>
      <v-flex xs1 ma-3>
        <v-layout row wrap justify-center>
          <h1>Home</h1>
        </v-layout>
      </v-flex>
      <v-spacer />
      <v-flex xs1 ma-3>
        <v-layout row wrap justify-center>
          <img src="/home.png" height="200px" width="auto"/>
        </v-layout>
      </v-flex>
      <v-spacer />
      <v-form nuxt :to="appRoute">
        <v-flex xs1 ma-3>
          <v-layout row wrap justify-center>
            <v-flex xs4>
              <v-text-field v-model="username" label="Input Username" filled class="input-field"></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs1 ma-3>
          <v-layout row wrap justify-center>
            <v-btn color="success" type="submit">Enter</v-btn>
          </v-layout>
        </v-flex>
      </v-form>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      username: ''
    }
  },
  computed: {
    appRoute () {
      return '/app/' + this.username
    }
  }
}
</script>

<style scoped lang="scss">
</style>
