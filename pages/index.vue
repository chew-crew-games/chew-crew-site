<template>
  <div>
    <section id="hero" class="hero is-halfheight">
      <div class="hero-body mt-3 has-text-centered">
        <div class="container">
          <h1
            class="title is-size-2 is-lowercase has-text-weight-normal has-text-light is-family-secondary"
          >
            chew crew
          </h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// import { useParallax } from "../composables/use-parallax";

// useParallax();
</script>

<style lang="scss" scoped>
hr {
  max-width: 1000px;
  margin: 0 auto;
}
.hero {
  // background-image: url("/img/heroes/home-hero.jpg");
}
.section {
  @include from($tablet) {
    .container {
      max-width: 1000px !important;
    }
  }
}
</style>
