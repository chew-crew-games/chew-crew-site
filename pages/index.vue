<template>
  <div>
    <section id="hero" class="hero is-halfheight">
      <div class="hero-body mt-3 has-text-centered">
        <div class="container">
          <h1 class="title is-size-2 is-lowercase has-text-light">portfolio</h1>
        </div>
      </div>
    </section>
    <section id="illustration" class="section">
      <div class="container has-text-centered">
        <h3 class="title is-size-4 is-lowercase mb-6 has-text-warning">
          Illustration
        </h3>
        <image-viewer :posts="illustrations" />
      </div>
    </section>
    <hr class="mt-4" />
    <section id="comics" class="section">
      <div class="container has-text-centered">
        <h3 class="title is-size-4 is-lowercase mb-6 has-text-warning">
          Comics
        </h3>
        <image-viewer :comics="comics" />
      </div>
    </section>
    <hr class="mt-4" />
    <section id="sketches" class="section">
      <div class="container has-text-centered">
        <h3 class="title is-size-4 is-lowercase mb-6 has-text-warning">
          Sketches
        </h3>
        <image-viewer :posts="sketches" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useParallax } from "../composables/use-parallax";
import { comics } from "../content/metadata/comics.json";
import { illustrations } from "../content/metadata/illustrations.json";
import { sketches } from "../content/metadata/sketches.json";

useParallax();
</script>

<style lang="scss" scoped>
hr {
  max-width: 1000px;
  margin: 0 auto;
}
.hero {
  background-image: url("/img/heroes/home-hero.jpg");
}
.section {
  @include from($tablet) {
    .container {
      max-width: 1000px !important;
    }
  }
}
</style>
