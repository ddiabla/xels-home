<template
  ><footer>
    <h3>
      <a
        href="https://github.com/itstyonirwansyah"
        target="_blank"
        rel="noreferrer"
      >
        Crafted by Tyo Nirwansyah
      </a>
    </h3>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>

<style scoped>
footer {
  padding: 3rem;
  color: white;
  text-align: center;
}

footer > h3 {
  font-weight: 600;
}

footer > h3 > a {
  text-decoration: none;
  color: white;
}
</style>
