<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

const props = defineProps<{
  imgSrc: string;
}>();

const onScroll = () => {
  const scrolled = window.pageYOffset;
  const parallaxElement = document.getElementById("hero");
  const parallaxSpeed = 0.4;
  const coords = scrolled * parallaxSpeed;
  parallaxElement!.style.backgroundPositionY = `${coords}px`;
};

onMounted(() => {
  document.addEventListener("scroll", onScroll, {
    passive: true,
  });
});

onUnmounted(() => {
  document.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <section
    id="hero"
    class="hero is-fullheight"
    :style="{ backgroundImage: `url(${props.imgSrc})` }"
  >
    <slot />
  </section>
</template>

<style lang="scss">
.hero {
  background-color: rgba(0, 0, 0, 0.3);
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  overflow: hidden;
  z-index: -1;

  &:before {
    width: 100%;
    height: 100%;
  }
}
</style>
