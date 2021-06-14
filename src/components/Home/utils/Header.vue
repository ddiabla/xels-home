<template>
  <p class="header">{{ header }}</p>
  <h3 class="text">{{ text }}</h3>
  <p class="desc">
    {{ desc }}
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  props: ["header", "text", "desc"],
});
</script>

<style scoped>
.header {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.5rem;
  color: #21e0ac;
  white-space: nowrap;
}
.text {
  white-space: nowrap;
  font-size: 1.8rem;
  margin-bottom: 0.8rem;
  margin-top: 0.8rem;
  color: #ffffff;
}
.desc {
  font-size: 1rem;
  color: #ffffff99;
  margin-bottom: 3rem;
}
@media screen and (max-width: 615px) {
  .header {
    font-size: 1.2rem;
  }
  .text {
    font-size: 1.5rem;
  }
  .desc {
    font-size: 0.9rem;
  }
}
@media screen and (max-width: 508px) {
  .header {
    font-size: 1rem;
  }
  .text {
    font-size: 1.1rem;
  }
  .desc {
    font-size: 0.8rem;
    width: 20em;
  }
}
@media screen and (max-width: 385px) {
  .text {
    font-size: 0.9rem;
  }
}
</style>
