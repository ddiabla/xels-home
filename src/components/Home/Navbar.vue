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
        <li>
          <a
            href="https://github.com/itstyonirwansyah/transero-bot#bot-commands"
            target="_blank"
            rel="alternate"
            >Docs</a
          >
        </li>
        <li>
          <a
            href="https://github.com/itstyonirwansyah/transero-bot"
            target="_blank"
            rel="alternate"
            >Contribute</a
          >
        </li>
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
@media screen and (max-width: 736px) {
  .navbar {
    padding: 2rem 4rem;
  }
  .navbar-btn {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .navbar {
    padding: 2em 2em;
  }
}
@media screen and (max-width: 508px) {
  .logo {
    height: 90px;
    width: 86px;
    margin-right: 2em;
  }
  .navbar-list > li > a {
    font-size: 1em;
  }
}
@media screen and (max-width: 376px) {
  .navbar {
    padding: 2em 2em;
  }
  .logo {
    height: 82px;
    width: 78px;
    margin-right: 1.4em;
  }
  .navbar-list > li > a {
    font-size: 0.8em;
  }
}
</style>
