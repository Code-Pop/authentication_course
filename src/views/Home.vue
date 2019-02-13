<template>
  <div class="home">
    <h1>Welcome to the App!</h1>
    <template v-if="!this.$store.state.user"
      >To use the app, you'll need to
      <router-link :to="{ name: 'authenticate' }"
        >Login or Register</router-link
      >
    </template>
  </div>
</template>
