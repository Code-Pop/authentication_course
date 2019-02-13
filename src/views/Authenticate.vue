<template>
  <div>
    <component :is="selectedComponent" />
    <a
      @click="toggleComponent"
      v-show="selectedComponent === 'LoginUser'"
      class="authLink"
      >Don't have an account? Create one.</a
    >
    <a
      @click="toggleComponent"
      v-show="selectedComponent === 'RegisterUser'"
      class="authLink"
      >Already have an account? Login.</a
    >
  </div>
</template>

<script>
import RegisterUser from '../components/RegisterUser'
import LoginUser from '../components/LoginUser'

export default {
  components: { RegisterUser, LoginUser },
  data() {
    return {
      selectedComponent: 'LoginUser'
    }
  },
  methods: {
    toggleComponent() {
      if (this.selectedComponent === 'LoginUser') {
        this.selectedComponent = 'RegisterUser'
      } else {
        this.selectedComponent = 'LoginUser'
      }
    }
  }
}
</script>
