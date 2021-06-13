<template>
  <div class="feature">
    <div class="icon">
      <svg :data-src="icons[icon]" width="36" height="36" />
    </div>
    <div class="text">
      <h2>{{ header }}</h2>
      <p>{{ desc }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "external-svg-loader";

export default defineComponent({
  name: "Feature",
  props: {
    icon: String,
    header: String,
    desc: String,
  },
  data() {
    return {
      icons: [
        "https://s2.svgbox.net/materialui.svg?ic=language&color=21e0ac",
        "https://s2.svgbox.net/hero-outline.svg?ic=lightning-bolt&color=21e0ac",
        "https://s2.svgbox.net/materialui.svg?ic=multiple_stop&color=21e0ac",
        "https://s2.svgbox.net/hero-solid.svg?ic=chat&color=21e0ac",
      ],
    };
  },
});
</script>

<style scoped>
.feature {
  display: flex;
  align-items: center;
  width: 30rem;
}
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.4rem;
  background: #242729;
  padding: 1rem;
  margin-right: 2rem;
  margin-top: -3rem;
}
.text > h2 {
  margin-bottom: 1rem;
  white-space: nowrap;
}
</style>
