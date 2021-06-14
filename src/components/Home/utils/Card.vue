<template>
  <a :href="link" target="_blank" rel="noreferrer">
    <div class="card">
      <h3>{{ text }}</h3>
      <p>{{ desc }}</p>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card",
  props: ["text", "desc", "link"],
});
</script>

<style scoped>
a {
  text-decoration: none;
}
.card {
  padding: 3rem 2rem;
  background: #1d1e22;
  border-radius: 1.4rem;
  width: 30rem;
  cursor: pointer;
  transition: background 0.5s ease;
}
.card:hover {
  background: rgb(32, 34, 36);
}
.card > h3 {
  color: #ffffff;
  margin-bottom: 0.4rem;
}
.card > p {
  margin-bottom: 0.4rem;
  color: #ffffff99;
}

@media screen and (max-width: 508px) {
  .card {
    border-radius: 1.2rem;
    width: 25rem;
  }
  .card > h3 {
    font-size: 1em;
  }
  .card > p {
    font-size: 0.8em;
  }
}
@media screen and (max-width: 395px) {
  .card {
    width: 18em;
  }
  .card > h3 {
    font-size: 0.9em;
  }
  .card > p {
    font-size: 0.8em;
  }
}
</style>
