<template>
  <div class="about">
    <form @submit.prevent="login">
      <input v-model="email" type="email" name="email" value="" />
      <input v-model="password" type="password" name="" value="" />
      <button type="submit" name="button">Login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push("/dashboard");
        });
    }
  }
};
</script>
