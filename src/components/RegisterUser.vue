<template>
  <div class="about">
    <form @submit.prevent="register">
      <input v-model="name" type="text" name="name" value />
      <input v-model="email" type="email" name="email" value />
      <input v-model="password" type="password" name value />
      <button type="submit" name="button">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register() {
      this.$store
        .dispatch('register', {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push('/dashboard')
        })
    }
  }
}
</script>
