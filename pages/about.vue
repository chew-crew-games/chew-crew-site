<template>
  <div>
    <section id="hero" class="hero is-halfheight">
      <div class="hero-body mt-3 has-text-centered">
        <div class="container">
          <h1 class="title is-size-2 is-lowercase has-text-light">about me</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container mt-6 has-text-centered">
        <div class="columns is-variable">
          <div class="column is-one-quarter has-text-centered">
            <figure class="image is-square">
              <img :src="about.propic" />
            </figure>
          </div>
          <div class="column is-three-quarters">
            <div class="content has-text-left description">
              <h2
                class="is-lowercase is-size-4 has-text-weight-semibold title has-text-warning"
              >
                {{ about.header }}
              </h2>
              <div class="block is-size-6">
                <p v-html="micromark(about.body)" />
              </div>
              <div class="my-5 has-text-centered-mobile">
                <a
                  v-for="social of about.socials"
                  :key="social.class"
                  class="icon is-small mx-2 has-text-primary"
                  target="_blank"
                  href="https://ko-fi.com/yellobeans"
                >
                  <i class="mdi" :class="`mdi-${social.class}`" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="columns is-multiline is-8 my-6">
          <div
            v-for="section of about.sections"
            :key="section.header"
            class="column is-half"
          >
            <div class="content has-text-left">
              <h4
                class="is-lowercase is-size-5 has-text-weight-semibold has-text-warning"
              >
                {{ section.header }}
              </h4>
              <p class="is-size-7" v-html="micromark(section.body)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { micromark } from "micromark";
import { useParallax } from "../composables/use-parallax";
import about from "../content/metadata/about.json";

useParallax();
</script>

<style lang="scss" scoped>
.hero {
  background-image: url("/img/heroes/about-hero.jpg");
}

.section {
  @include from($tablet) {
    .container {
      max-width: 1000px !important;
    }
    .description {
      margin: 0 2rem;
    }
  }
}
</style>
