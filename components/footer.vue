<script setup lang="ts">
// import about from "../content/metadata/about.json";
</script>
<template>
  <footer class="footer has-text-centered">
    <div
      class="content is-flex is-justify-content-center is-flex-direction-column"
    >
      <p class="has-text-weight-bold is-size-5 mb-1 is-lowercase">yello</p>
      <div>
        <!-- <a
          v-for="social of about.socials"
          :key="social.class"
          class="icon is-small mx-2 has-text-primary"
          target="_blank"
          href="https://ko-fi.com/yellobeans"
        >
          <i class="bxs" :class="`bxs-${social.class}`" />
        </a> -->
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
