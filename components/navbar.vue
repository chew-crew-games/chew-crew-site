<script setup lang="ts">
import { ref } from "vue";
import { NAVBAR_METADATA_PATH, NavbarMetadata } from "../utils/content";

const navbarBurgerToggled = ref(false);
const isTop = ref(true);

function toggleNavbar(overrideValue?: boolean) {
  navbarBurgerToggled.value = overrideValue ?? !navbarBurgerToggled.value;
}

const { data: navbarMetadata } = await useAsyncData(() =>
  queryContent<NavbarMetadata>(NAVBAR_METADATA_PATH).findOne()
);

function onScroll() {
  isTop.value = window.pageYOffset < 5;
}

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
  <nav
    class="navbar is-fixed-top"
    :class="isTop ? 'is-top is-dark' : 'is-primary'"
  >
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item" @click="toggleNavbar(false)">
          <img :src="navbarMetadata?.logo" />
        </nuxt-link>
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
          <template v-for="link in navbarMetadata?.links" :key="link.text">
            <nuxt-link class="navbar-item has-text-weight-bold" :to="link.url">
              <span v-if="link.boxicon" class="icon">
                <i :class="`bx bxl-${link.boxicon}`" />
              </span>
              <span class="text">
                {{ link.text }}
              </span>
              <span
                v-if="link.url.includes('http') && !link.boxicon"
                class="icon"
              >
                <i class="bx bx-link-external" />
              </span>
            </nuxt-link>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;

  height: 3em;
  .navbar-item > a {
    color: $primary;
  }
  .navbar-item {
    &:hover,
    &:focus,
    &:active,
    &:focus-within {
      background-color: $white-ter;
      .navbar-link {
        background-color: $white-ter;
      }
    }
  }
  &.is-top {
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.5) 100%
    ) !important;
    height: 5em;
    border-bottom: none;
    .navbar-item {
      background-color: rgba(0, 0, 0, 0);
      > a {
        color: $white;
      }
    }
    .navbar-item {
      &:hover {
        background-color: rgba(0, 0, 0, 0.3) !important;
        border-bottom: none;
        .navbar-link {
          background-color: rgba(0, 0, 0, 0.3);
        }
      }
    }
    .navbar-item {
      &:focus,
      &:active,
      &:focus-within {
        background-color: rgba(0, 0, 0, 0) !important;
      }
    }
  }
}
</style>
