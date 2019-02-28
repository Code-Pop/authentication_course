<template>
  <div id="app">
    <app-nav />
    <router-view class="page" />
  </div>
</template>

<script>
import AppNav from './components/AppNav'

export default {
  name: 'App',
  components: { AppNav }
}
</script>

<style lang="scss">
@import "./assets/styles/global.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.page{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 56px);
}
</style>
