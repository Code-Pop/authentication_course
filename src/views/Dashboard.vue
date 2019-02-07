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
      message: "NO MESSAGE"
    };
  },
  created() {
    const userString = localStorage.getItem("user");
    if (userString) {
      const token = JSON.parse(userString).token;
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      axios.get("//localhost:3000/protected").then(({ data }) => {
        this.message = data.message;
      });
    }
  }
};
</script>
