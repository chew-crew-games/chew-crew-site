<script setup lang="ts">
import { HOME_METADATA_PATH, HomePageMetadata } from "../utils/content";

const homePageMetadata = await queryContent<HomePageMetadata>(
  HOME_METADATA_PATH
).findOne();
</script>

<template>
  <div>
    <hero :img-src="homePageMetadata?.heroimg">
      <div class="hero-body mt-3 has-text-centered is-block">
        <div class="container my-6">
          <h6
            v-if="homePageMetadata?.pretitle"
            class="subtitle is-size-5 is-size-6-mobile is-italic has-text-white is-family-secondary"
          >
            {{ homePageMetadata?.pretitle }}
          </h6>
          <h1
            class="title hero-title my-3 is-size-1-mobile is-lowercase has-text-weight-normal has-text-light is-family-secondary"
          >
            {{ homePageMetadata?.title }}
          </h1>
        </div>
        <div class="container my-6">
          <div class="columns">
            <div class="column is-three-fifths">
              <div class="media" v-html="homePageMetadata?.sectionembed" />
            </div>
            <div class="column is-two-fifths">
              <div class="block mx-5">
                <h2
                  class="title is-3 is-size-4-mobile has-text-white is-family-secondary has-text-weight-normal has-text-left"
                >
                  {{ homePageMetadata?.sectionheader }}
                </h2>
                <p
                  class="mt-4 has-text-justified has-text-left-mobile is-size-5 is-size-6-mobile has-text-white"
                >
                  {{ homePageMetadata?.sectiondesc }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="container my-6">
          <div class="columns my-4">
            <div
              class="column"
              v-for="button in homePageMetadata?.ctabuttons"
              :key="button.url"
            >
              <button
                class="button is-large is-warning is-responsive"
                :href="button.url"
              >
                <span v-if="button.boxicon" class="icon">
                  <i :class="`bx bxl-${button.boxicon}`" />
                </span>
                <span class="text">
                  {{ button.text }}
                </span>
              </button>
            </div>
          </div>
          <div v-if="homePageMetadata?.ctaafter" class="my-4">
            <h3 class="is-size-5 is-size-6-mobile has-text-white">
              {{ homePageMetadata?.ctaafter }}
            </h3>
          </div>
        </div>
      </div>
    </hero>
  </div>
</template>

<style lang="scss">
.media {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
}

@include from($tablet) {
  .hero-title {
    font-size: 7rem !important;
  }
}
</style>
