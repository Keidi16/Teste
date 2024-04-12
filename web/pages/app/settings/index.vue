<script setup lang="ts">
definePageMeta({
  title: "Configurações",
  middleware: "auth-routes",
});
</script>

<template>
  <layout-settings>
    <section class="w-full h-full flex items-center justify-center">
      <div class="flex flex-col items-center gap-4">
        <Icon name="heroicons:cog-8-tooth" size="64" />
        <span class="text-neutral-500">
          Selecione uma opção de configuração
        </span>
      </div>
    </section>
  </layout-settings>
</template>
