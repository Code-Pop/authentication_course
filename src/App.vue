<template>
  <div id="app">
    <app-nav />
    <router-view class="page" />
  </div>
</template>

<script>
import AppNav from './components/AppNav'

export default {
  components: { AppNav }
}
</script>

<style lang="scss">
@import './assets/styles/global.scss';
.page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 56px);
}
</style>
