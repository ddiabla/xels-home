<template>
  <div class="hero">
    <h1 class="hero-sub">Latest and Epic</h1>
    <h1 class="hero-text">Translate and define with just a command.</h1>
    <p class="hero-desc">
      Transero makes it all possible to translate for over 100+ languages and
      define words.
    </p>
    <div class="btn-container">
      <a
        href="https://discord.com/oauth2/authorize?client_id=835871295148785734&permissions=190464&scope=bot"
        target="_blank"
        rel="noreferrer"
        class="btn"
      >
        Invite Bot
      </a>
      <a
        class="btn outline"
        href="https://github.com/itstyonirwansyah/transero-bot#bot-commands"
        target="_blank"
        rel="alternate"
        >See Docs</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Hero",
});
</script>

<style scoped>
.hero {
  margin-top: 2rem;
  padding: 6rem 5rem;
  width: 44rem;
}
.hero-sub {
  margin-bottom: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #21e0ac;
}
.hero-text {
  margin-bottom: 0.8rem;
  color: white;
  line-height: 3rem;
}
.hero-desc {
  font-size: 1.1rem;
  color: #ffffff99;
  margin-bottom: 2.5rem;
}
.btn-container {
  display: flex;
  align-items: center;
  gap: 2.8rem;
}
.btn {
  padding: 1.1rem 2.4rem;
  font-size: 1.2rem;
  background-color: #21e0ac;
  color: white;
  border: 0;
  border-radius: 0.6rem;
  font-weight: 700;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  outline: none;
}
.outline {
  color: #21e0ac;
  background: transparent;
  box-shadow: 0 0 0 4px #21e0ac inset;
}

@media screen and (max-width: 705px) {
  .hero {
    padding: 5rem 4em;
    width: 36rem;
  }
  .hero-sub {
    font-size: 1.8em;
  }
  .hero-text {
    font-size: 1.9em;
  }
}
@media screen and (max-width: 600px) {
  .hero {
    width: 32rem;
    padding: 5rem 4em 5em 3em;
  }
  .hero-sub {
    font-size: 1.6em;
  }
  .hero-text {
    font-size: 1.7em;
  }
}
@media screen and (max-width: 508px) {
  .hero {
    padding: 5rem 2rem;
    width: 24em;
  }
  .hero-sub {
    font-size: 1.3em;
  }
  .hero-text {
    font-size: 1.6em;
    line-height: 1.8em;
  }
  .btn-container {
    gap: 2em;
  }
  .btn {
    padding: 1rem 2rem;
  }
}
@media screen and (max-width: 376px) {
  .hero {
    margin-top: 0;
    width: auto;
  }
  .hero-sub {
    font-size: 1em;
  }
  .hero-text {
    font-size: 1.5em;
  }
  .hero-desc {
    font-size: 0.8em;
    color: #ffffff99;
  }
  .btn-container {
    gap: 1em;
  }
  .btn {
    padding: 1rem 1.2rem;
    font-size: 1em;
  }
}
@media screen and (max-width: 385px) {
  .hero {
    padding: 5rem 2rem;
  }
  .hero-sub {
    font-size: 1em;
  }
  .hero-text {
    font-size: 1.2em;
  }
  .btn {
    padding: 1rem 1.4rem;
    font-size: 0.8em;
  }
}
</style>
