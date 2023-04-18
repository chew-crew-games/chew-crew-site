<template>
  <div>
    <navbar />
    <slot />
    <foot />
  </div>
</template>

<script setup lang="ts">
import foot from "../components/footer.vue";
import navbar from "../components/navbar.vue";
</script>
