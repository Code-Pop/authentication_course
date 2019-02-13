<template>
  <div>
    <form @submit.prevent="login">
      <label for="email">Email:</label>
      <input v-model="email" type="email" name="email" value />
      <label for="password">Password:</label>
      <input v-model="password" type="password" name value />
      <p v-if="$store.state.status === 401">Invalid login info.</p>
      <button type="submit" name="button">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'dashboard' })
        })
    }
  }
}
</script>
