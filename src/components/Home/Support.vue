<template>
  <div class="support">
    <Header
      header="Want to support transero"
      text="It's open-source and brand new"
      desc="Transero is currently open-source and currently open for contributions."
    />
    <div class="support-link">
      <Card
        link="https://github.com/itstyonirwansyah/transero-site"
        text="Contribute via Github"
        desc="If you want to contribute to society, Transero welcomes you."
      />
      <Card
        link="https://discord.gg/BMentMbyxg"
        text="Report a problem and ideas"
        desc="We will help if any problem is reported. Feel free to request a feature."
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./utils/Header.vue";
import Card from "./utils/Card.vue";

export default defineComponent({
  name: "Support",
  components: {
    Header,
    Card,
  },
});
</script>

<style scoped>
.support {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 2rem;
  background: #242729;
  padding: 8rem;
  color: white;
  user-select: none;
}
.support-link {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  gap: 2rem;
}
</style>
