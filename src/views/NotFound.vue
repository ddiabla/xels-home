<template>
  <div>
    <Message />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Message from "../components/NotFound/Message.vue";

export default defineComponent({
  name: "404",
  components: {
    Message,
  },
});
</script>
