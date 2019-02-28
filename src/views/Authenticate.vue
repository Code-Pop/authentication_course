<template>
  <div>
    <component :is="selectedComponent" />
    <a
      v-show="newUser"
      class="auth-link"
      @click="toggleComponent"
    >
      Don't have an account? Create one.
    </a>
    <a
      v-show="!newUser"
      class="auth-link"
      @click="toggleComponent"
    >
      Already have an account? Login.
    </a>
  </div>
</template>

<script>
import RegisterUser from '../components/RegisterUser'
import LoginUser from '../components/LoginUser'

export default {
  components: { RegisterUser, LoginUser },
  computed: {
    newUser () {
      return this.$store.state.newUser
    },
    selectedComponent () {
      return this.newUser ? 'LoginUser' : 'RegisterUser'
    }
  },
  methods: {
    toggleComponent () {
      this.$store.dispatch('newUser', !this.newUser)
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
