<script setup lang="ts">
import { FooterMetadata } from "../utils/content";

const footerMetadata = await queryContent<FooterMetadata>(
  FOOTER_METADATA_PATH
).findOne();
</script>
<template>
  <footer
    class="footer has-background-primary has-text-centered has-text-white"
  >
    <div
      class="content is-flex is-justify-content-center is-flex-direction-column"
    >
      <figure v-if="footerMetadata?.logo" class="image is-64x64">
        <img :src="footerMetadata?.logo" />
      </figure>
      <p
        v-if="footerMetadata?.brandname"
        class="has-text-weight-bold is-size-5 mb-1 is-lowercase is-family-primary"
      >
        {{ footerMetadata?.brandname }}
      </p>
      <div class="my-3">
        <a
          v-for="link of footerMetadata?.links"
          :key="link.url"
          class="icon is-medium mx-2 has-text-white"
          :target="link.url.includes('http') ? '_blank' : ''"
          :href="link.url"
        >
          <i :class="`bx bxl-${link.boxicon} bx-sm`" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  padding: 2rem 1.5rem !important;
  span {
    cursor: pointer;
  }
}
</style>
