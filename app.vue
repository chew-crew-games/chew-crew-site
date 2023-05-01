<template>
  <div>
    <navbar />
    <nuxt-page />
    <foot />
  </div>
</template>

<script setup lang="ts">
import foot from "./components/footer.vue";
import navbar from "./components/navbar.vue";

const route = useRoute();

onMounted(() => {
  redirectToAdmin();
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
