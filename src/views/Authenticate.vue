<template>
  <div>
    <component :is="loginOrRegister" />
    <a
      v-show="isNewUser"
      class="auth-link"
      @click="toggleComponent"
    >Don't have an account? Create one.</a>
    <a
      v-show="!isNewUser"
      class="auth-link"
      @click="toggleComponent"
    >Already have an account? Login.</a>
  </div>
</template>

<script>
import RegisterUser from '../components/RegisterUser'
import LoginUser from '../components/LoginUser'

export default {
  components: { RegisterUser, LoginUser },
  computed: {
    isNewUser () {
      return this.$store.state.isNewUser
    },
    loginOrRegister () {
      return this.isNewUser ? 'LoginUser' : 'RegisterUser'
    }
  },
  methods: {
    toggleComponent () {
      this.$store.dispatch('isNewUser', !this.isNewUser)
    }
  }
}
</script>

<style lang="scss" scoped>
.auth-link {
  font-size: 0.8em;
  text-decoration: underline;
  color: #2c3e50;
  cursor: pointer;
}
</style>
