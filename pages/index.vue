<script setup lang="ts">
import { HOME_METADATA_PATH, HomePageMetadata } from "../utils/content";

const { data: homePageMetadata } = await useAsyncData(() =>
  queryContent<HomePageMetadata>(HOME_METADATA_PATH).findOne()
);
</script>

<template>
  <div>
    <hero :img-src="homePageMetadata?.heroimg">
      <div class="hero-body mt-3 has-text-centered is-block">
        <div class="container my-6">
          <h6
            v-if="homePageMetadata?.pretitle"
            class="subtitle is-5 is-6-mobile is-italic has-text-white is-family-secondary"
          >
            {{ homePageMetadata?.pretitle }}
          </h6>
          <h1
            class="title my-3 is-1-mobile is-lowercase has-text-weight-normal has-text-light is-family-secondary"
          >
            {{ homePageMetadata?.title }}
          </h1>
        </div>
        <div class="container">
          <div class="columns">
            <div class="column is-three-fifths">
              <span v-html="homePageMetadata?.sectionembed" />
            </div>
            <div class="column is-two-fifths has-text-left">
              <div class="block">
                <h2
                  class="title is-3 is-size-4-mobile has-text-white is-family-secondary has-text-weight-normal"
                >
                  {{ homePageMetadata?.sectionheader }}
                </h2>
                <p class="mt-4 is-size-5 is-size-6-mobile has-text-white">
                  {{ homePageMetadata?.sectiondesc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </hero>
  </div>
</template>

<style lang="scss">
@include from($tablet) {
  .title {
    font-size: 7rem;
  }
}
</style>
