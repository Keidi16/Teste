<script setup lang="ts"></script>

<template>
  <div
    class="absolute top-0 w-full h-12 px-4 py-3 bg-yellow-500/10 text-sm text-white/70 default-rounded"
  >
    <div class="w-ful h-full flex items-center gap-2">
      <Icon name="heroicons:information-circle" size="18" />
      <slot />
    </div>
  </div>
</template>
