<template>
  <div class="navbar">
    <div class="left">
      <router-link to="/"
        ><img
          src="../assets/transero-logo.svg"
          width="94"
          height="90"
          class="logo"
          alt="logo"
      /></router-link>
      <ul class="navbar-list">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/docs">Docs</router-link></li>
        <li><router-link to="/contribute">Contribute</router-link></li>
      </ul>
    </div>
    <div class="right">
      <a
        class="navbar-btn"
        href="https://discord.gg/BMentMbyxg"
        target="_blank"
        rel="noreferrer"
      >
        Join Server
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
});
</script>

<style scoped>
.logo {
  margin-right: 2.5rem;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 5rem;
}
.left {
  display: flex;
  align-items: center;
}
.transero-logo {
  height: 100px;
  width: 100px;
  background-size: 90px;
  background-position: center;
  background-image: url("../assets/transero-logo.svg");
}
.navbar-list {
  display: flex;
  align-items: center;
  gap: 1rem;
  list-style: none;
}
.navbar-list > li > a {
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
}
.navbar-btn {
  padding: 1.1rem 2.4rem;
  font-size: 1.2rem;
  font-size: 700;
  background-color: #21e0ac;
  color: white;
  border: 0;
  border-radius: 0.6rem;
  font-weight: 700;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  outline: none;
}
</style>
