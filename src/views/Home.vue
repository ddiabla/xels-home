<template>
  <div>
    <Navbar />
    <Hero />
    <Middle />
    <Features />
    <Support />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../components/Home/Navbar.vue";
import Hero from "../components/Home/Hero.vue";
import Middle from "../components/Home/Middle.vue";
import Features from "../components/Home/Features.vue";
import Support from "../components/Home/Support.vue";
import Footer from "../components/Home/Footer.vue";

export default defineComponent({
  name: "Home",
  components: {
    Navbar,
    Hero,
    Middle,
    Features,
    Support,
    Footer,
  },
});
</script>

<style scoped>
div {
  background: #1d1e22;
}
</style>
