<template>
  <nav class="navbar is-fixed-top" :class="{ 'is-top': isTop }">
    <div class="container">
      <div class="navbar-brand">
        <div id="logo" class="navbar-item" @click="toggleNavbar(false)">
          <nuxt-link
            class="has-text-weight-bold is-size-5 has-text-warning"
            to="/"
          >
            yello
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
              Art
            </nuxt-link>
            <div class="navbar-dropdown">
              <nuxt-link
                class="navbar-item is-lowercase has-text-weight-bold"
                to="/#illustration"
              >
                Illustration
              </nuxt-link>
              <nuxt-link
                class="navbar-item is-lowercase has-text-weight-bold"
                to="/#comics"
              >
                Comics
              </nuxt-link>
              <nuxt-link
                class="navbar-item is-lowercase has-text-weight-bold"
                to="/#sketches"
              >
                Sketches
              </nuxt-link>
            </div>
          </div>
          <div class="navbar-item">
            <nuxt-link to="/about" class="is-lowercase has-text-weight-bold">
              about
            </nuxt-link>
          </div>
          <div class="navbar-item has-button">
            <a
              href="mailto:oi.yello3@gmail.com?subject=Hello!&body=I'm%20here%20from%20your%20website!"
              class="button is-lowercase has-text-weight-bold"
              target="_blank"
            >
              Contact
            </a>
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
  @include from($tablet) {
    .navbar-item > a {
      color: $primary;
    }
    border-bottom: 1px solid lightgray;
    .navbar-item:not(.has-button) {
      &:hover,
      &:focus,
      &:active,
      &:focus-within {
        background-color: $white-ter;
        border-bottom: 1px solid lightgray;
        .navbar-link {
          background-color: $white-ter;
        }
      }
    }
    .navbar-dropdown .navbar-item {
      &:hover,
      &:focus,
      &:active,
      &:focus-within {
        border-bottom: none;
      }
    }
    &.is-top {
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 0.1) 50%,
        rgba(0, 0, 0, 0.5) 100%
      );
      height: 5em;
      border-bottom: none;
      .navbar-item {
        background-color: rgba(0, 0, 0, 0);
        > a {
          color: $white;
        }
      }
      .navbar-item:not(.has-button) {
        &:hover,
        &:focus,
        &:active,
        &:focus-within {
          background-color: rgba(0, 0, 0, 0.3);
          border-bottom: none;
          .navbar-link {
            background-color: rgba(0, 0, 0, 0.3);
          }
        }
      }

      .navbar-item .button {
        background-color: rgba(0, 0, 0, 0);
        &:hover {
          color: $primary;
          background-color: $white;
        }
      }
    }
  }
}
</style>
