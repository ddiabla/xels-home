<template>
  <div class="notfound">
    <h1>Sorry, i think this page does not exist.</h1>
    <div class="btn-container">
      <a
        class="btn"
        href="https://discord.com/oauth2/authorize?client_id=835871295148785734&permissions=190464&scope=bot"
        target="_blank"
        rel="noreferrer"
      >
        Add Bot
      </a>
      <router-link class="btn outline" to="/">Return Home</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Message",
});
</script>

<style scoped>
.notfound {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
}

.notfound > h1 {
  text-align: center;
  margin-bottom: 2rem;
}

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.btn {
  padding: 1.1rem 2.4rem;
  font-size: 1.2rem;
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
.outline {
  color: #21e0ac;
  background: transparent;
  box-shadow: 0 0 0 4px #21e0ac inset;
}

@media screen and (max-width: 600px) {
  .notfound > h1 {
    font-size: 1.2em;
  }
  .btn {
    padding: 1rem 2rem;
    font-size: 0.8rem;
  }
  .btn-container {
    gap: 1rem;
  }
}

@media screen and (max-width: 376px) {
  .notfound > h1 {
    font-size: 0.8em;
  }
  .btn {
    padding: 0.6rem 1.4rem;
    font-size: 0.8rem;
  }
}
</style>
