<template>
  <div>
    <form @submit.prevent="login">
      <label for="email">
        Email:
      </label>
      <input v-model="email" type="email" name="email" value>

      <label for="password">
        Password:
      </label>
      <input v-model="password" type="password" name="password" value>

      <button type="submit" name="button">
        Login
      </button>

      <p v-if="status === 400">
        Invalid login. Please try again.
      </p>

      <router-link to="/register">
        Don't have an account? Register.
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      status: null
    }
  },
  methods: {
    login () {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'dashboard' })
        })
        .catch(err => {
          this.status = err.response.status
        })
    }
  }
}
</script>

<style scoped>
</style>
