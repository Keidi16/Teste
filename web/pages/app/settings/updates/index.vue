<script setup lang="ts">
definePageMeta({
  title: "Configurações / Actualizações",
  middleware: "auth-routes",
});
</script>

<template>
  <layout-settings>
    <div class="w-full h-full flex flex-col gap-3 items-center justify-center">
      <Icon name="heroicons:arrow-path" class="text-5xl" />
      <p class="text-sm text-center">
        A sua organização está usando a versão mais actual do REX - v1.0
      </p>
    </div>
  </layout-settings>
</template>
