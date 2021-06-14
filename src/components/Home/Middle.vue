<template>
  <div class="middle">
    <Header
      header="Take a look at Transero"
      desc="Part of over 30k servers, looking to become part of yours next."
      text="The rising-star translating bot in discord"
    />
    <div class="middle-box">
      <p>100+<small>languages</small></p>
      <p>30k<small>servers</small></p>
      <p>01<small>creator</small></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./utils/Header.vue";

export default defineComponent({
  name: "Middle",
  components: {
    Header,
  },
});
</script>

<style scoped>
.middle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #242729;
  color: white;
  margin-top: 2rem;
  padding: 10rem 0;
  width: 100%;
}
.middle-sub {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.5rem;
  color: #21e0ac;
  margin-top: 1rem;
  margin-bottom: 0.8rem;
  white-space: nowrap;
}
.middle-text {
  white-space: nowrap;
  font-size: 1.8rem;
  margin-bottom: 0.8rem;
}
.middle-desc {
  font-size: 1rem;
  color: #ffffff99;
  margin-bottom: 3rem;
}
.middle-box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8rem;
  width: 30em;
  padding: 4rem;
  border-radius: 1.2rem;
  background: #1d1e22;
  font-size: 1.5rem;
  align-items: center;
}
.middle-box > p {
  display: flex;
  text-align: left;
  font-weight: 700;
  font-size: 1.5rem;
  flex-direction: column;
}
.middle-box > p > small {
  margin-top: -8px;
  display: flex;
  font-weight: 600;
  flex-direction: column;
}

@media screen and (max-width: 705px) {
  .middle-box {
    gap: 5rem;
    width: 25em;
  }
}
@media screen and (max-width: 615px) {
  .middle-box {
    gap: 4rem;
    width: 22em;
  }
}
@media screen and (max-width: 600px) {
  .middle-box {
    padding: 4rem 2rem;
    gap: 3rem;
    width: 20em;
  }
}
@media screen and (max-width: 508px) {
  .middle-box > p {
    font-size: 0.8em;
  }
  .middle-box {
    width: 16em;
  }
}
@media screen and (max-width: 385px) {
  .middle-box > p {
    font-size: 0.7em;
  }
  .middle-box {
    width: auto;
  }
}
</style>
