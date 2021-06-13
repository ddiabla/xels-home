<template>
  <div class="contribute">
    <h1>This is {{ this.$route.name }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Contribute",
  data() {
    return {
      pageTitle: this.$route.name,
    };
  },
});
</script>

<style scoped></style>
