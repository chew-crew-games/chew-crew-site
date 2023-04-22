<template>
  <nav class="navbar is-fixed-top is-primary" :class="{ 'is-top': isTop }">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item" @click="toggleNavbar(false)">
          <img :src="navbarMetadata.logo" />
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
          <template v-for="link in navbarMetadata.links" :key="link.text">
            <nuxt-link class="navbar-item has-text-weight-bold" :to="link.url">
              <span class="text">
                {{ link.text }}
              </span>
              <span v-if="link.url.includes('http')" class="icon">
                <i class="mdi mdi-open-in-new" />
              </span>
            </nuxt-link>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { NAVBAR_METADATA_PATH, NavbarMetadata } from "../utils/content";

const navbarBurgerToggled = ref(false);
const isTop = ref(true);

function toggleNavbar(overrideValue?: boolean) {
  navbarBurgerToggled.value = overrideValue ?? !navbarBurgerToggled.value;
}

const navbarMetadata = await queryContent<NavbarMetadata>(
  NAVBAR_METADATA_PATH
).findOne();
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
