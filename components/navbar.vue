<template>
  <nav class="navbar is-fixed-top" :class="{ 'is-top': isTop }">
    <div class="container">
      <div class="navbar-brand">
        <div id="logo" class="navbar-item" @click="toggleNavbar(false)">
          <nuxt-link
            class="has-text-weight-bold is-size-5 has-text-warning"
            to="/"
          >
            chew crew
          </nuxt-link>
        </div>
        <a class="navbar-burger burger" @click="toggleNavbar()">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        class="navbar-menu"
        :class="{ 'is-active': navbarBurgerToggled }"
        @click="toggleNavbar(false)"
      >
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <nuxt-link
              class="navbar-link is-lowercase has-text-weight-bold"
              to="/"
            >
              Test
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const navbarBurgerToggled = ref(false);
const isTop = ref(true);

const toggleNavbar = (setValue?: boolean) => {
  navbarBurgerToggled.value = setValue ?? !navbarBurgerToggled.value;
};
const onScroll = () => {
  isTop.value = window.pageYOffset < 5;
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

<style lang="scss" scoped>
.navbar {
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;

  height: 3em;
}
</style>
