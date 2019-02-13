<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link v-if="user" :to="{ name: 'dashboard' }"
        >Dashboard</router-link
      >
      <template v-if="!user">
        <router-link :to="{ name: 'authenticate' }">
          <button type="button">Login</button>
        </router-link>
      </template>

      <template v-if="user">
        <span>Hello, {{ user.name }}.</span>
        <button type="button" @click="logout">Log out</button>
      </template>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  display: flex;
  flex-wrap: wrap;
  padding: 0.2em;
  margin-bottom: 3em;
  background: linear-gradient(to right, #16c0b0, #84cf6a);
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: auto 0.8em auto 0.4em;
}
#nav a.router-link-exact-active {
  color: white;
}
#nav button {
  color: #2c3e50;
  background: white;
  margin-left: auto;
}
#nav span {
  margin: auto 1em auto 0em;
}
a:visited {
  color: #2c3e50;
}
body {
  padding: 0em;
  margin: 0em;
}
button {
  width: 5em;
  height: 2em;
  border-radius: 5%;
  margin: 0.5em;
  font-size: 1em;
  color: white;
  background: linear-gradient(to right, #16c0b0, #84cf6a);
}
form {
  display: block;
  width: 14em;
  margin: auto;
}
form p {
  color: red;
}
input {
  display: block;
  width: 100%;
  height: 1.6em;
  padding: 0.5em;
  margin-bottom: 1em;
  font: 1em 'Avenir', Helvetica, sans-serif;
}
.authLink {
  font-size: 0.8em;
  text-decoration: underline;
  color: #2c3e50;
}
.navButton {
  margin-left: auto;
}
</style>
