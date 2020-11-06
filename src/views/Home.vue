<template>
  <div class="home">
    <h1>Welcome to the App!</h1>
    <div v-if="notLoggedIn"> // here
      To use this app you'll need to
      <router-link to="/login">
        Login
      </router-link>
      or
      <router-link to="/register">
        Register
      </router-link>
    </div>
  </div>
</template>

<script>
import { authComputed } from '../vuex/helpers.js'
export default {
  computed: {
    ...authComputed,
  },
  methods: {
      notLoggedIn() { // & here
          return ! this.loggedIn
      }
  }
}
</script>
