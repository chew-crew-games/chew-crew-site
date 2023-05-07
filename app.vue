<template>
  <div>
    <navbar />
    <nuxt-page />
    <foot />
  </div>
</template>

<script setup lang="ts">
import posthog from "posthog-js";
import foot from "./components/footer.vue";
import navbar from "./components/navbar.vue";

const route = useRoute();

onMounted(() => {
  redirectToAdmin();

  posthog.init(import.meta.env.POSTHOG as string, {
    api_host: "https://app.posthog.com",
    autocapture: true,
  });
});

function redirectToAdmin() {
  const netlifyIdentity = (window as any)["netlifyIdentity"];
  if (netlifyIdentity) {
    netlifyIdentity.on("init", (user: any) => {
      if (!user) {
        netlifyIdentity.on("login", () => {
          navigateTo("/admin/");
        });
      }
    });
  } else if (route.hash) {
    navigateTo("/admin");
  }
}
</script>
