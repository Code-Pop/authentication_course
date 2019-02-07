<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    {{ message }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      message: "Loading..."
    };
  },
  created() {
    axios.get("//localhost:3000/protected").then(({ data }) => {
      this.message = data.message;
    });
  }
};
</script>
