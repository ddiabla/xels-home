<template>
  <div class="features">
    <Header
      header="The Features"
      text="What features does Transero offer?"
      desc="Why you should use Transero today."
    />
    <div class="features-list">
      <Feature
        v-for="feature in features"
        :key="feature.id"
        :header="feature.header"
        :desc="feature.desc"
        :icon="feature.id"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Feature from "./utils/Feature.vue";
import Header from "./utils/Header.vue";

export default defineComponent({
  name: "Features",
  data() {
    return {
      features: [
        {
          id: "0",
          header: "Transero is a polyglot",
          desc: "With Transero you can translate to a whole lot of languages.",
        },
        {
          id: "1",
          header: "Multi-Translate Feature",
          url:
            "https://s2.svgbox.net/materialui.svg?ic=multiple_stop&color=white",
          desc:
            "Transero got more, you can translate a 2-3 languages at the same time.",
        },
        {
          id: "2",
          url:
            "https://s2.svgbox.net/materialui.svg?ic=multiple_stop&color=white",
          header: "Includes a built-in quiz",
          desc:
            "Transero has a mini-game for you geography nerds and quiz whizzes.",
        },
        {
          id: "3",
          url: "https://s2.svgbox.net/hero-solid.svg?ic=chat&color=white",
          header: "At you service sir",
          desc:
            "Transero includes 24/7 service and will be active throughout the day.",
        },
      ],
    };
  },
  components: {
    Feature,
    Header,
  },
});
</script>

<style scoped>
.features {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 2rem;
  padding: 6rem 4rem 4rem 4rem;
  color: white;
}

.features-list {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2, auto);
  gap: 4rem;
  padding: 3rem;
  text-align: left;
}

.features-list > .feature {
  margin-bottom: 5rem;
}

@media screen and (max-width: 1120px) {
  .features-list {
    grid-template-columns: unset;
    grid-template-rows: repeat(2, auto);
  }
}

@media screen and (max-width: 1120px) {
  .features-list {
    grid-template-columns: unset;
    grid-template-rows: repeat(2, auto);
  }
}
@media screen and (max-width: 508px) {
  .features-list {
    margin-top: 2rem;
    grid-template-columns: unset;
    grid-template-rows: repeat(2, auto);
    padding: 0.6rem;
  }
}
</style>
