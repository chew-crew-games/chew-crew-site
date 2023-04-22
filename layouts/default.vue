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

onMounted(() => {
  redirectToAdmin();
});

function redirectToAdmin() {
  const netlifyIdentity = (window as any)["netlifyIdentity"];
  if (netlifyIdentity) {
    netlifyIdentity.on("init", (user: any) => {
      if (!user) {
        netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
}
</script>
