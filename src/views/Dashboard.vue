<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    {{ events }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      events: 'Loading events...'
    }
  },
  created() {
    axios.get('//localhost:3000/dashboard').then(({ data }) => {
      this.events = data.events
    })
  }
}
</script>
