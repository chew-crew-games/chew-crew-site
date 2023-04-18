<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
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
