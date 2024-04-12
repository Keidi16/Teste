<script setup lang="ts">
definePageMeta({
  title: "Penetration",
  middleware: "auth-routes",
});
</script>

<template>
  <section
    class="w-full h-full bg-[#141414] default-rounded overflow-auto scrollbar-inbox"
  >
    <div class="w-full h-full p-3">
      <ui-pentest-init />
      <ui-pentest-onboard />
    </div>
  </section>
</template>
