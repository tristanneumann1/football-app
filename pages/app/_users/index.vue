<template>
  <v-container class="users">
    <v-layout column>
      <v-flex>
        <v-layout row justify-center>
          <v-flex wrap text-center>
            <h1>Welcome {{ username }}!</h1>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-layout row justify-center>
          <v-flex wrap text-center ma-3>
            <img src="/lobby.png" height="200px" width="auto"/>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-layout row justify-center>
          <v-flex wrap text-center ma-3>
            <v-btn mx-2 fab dark large
              color="success"
              label="Create a new room"
            >
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

  </v-container>
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
