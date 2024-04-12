<script setup lang="ts">
withDefaults(
  defineProps<{
    loading: boolean;
  }>(),
  {}
);

// const styles = ref("");

// watch(type, (value) => {
//   console.log(value);
// });
</script>

<template>
  <button
    class="bg-[#0B3100] p-3 w-full rounded-lg text-white/80 flex items-center justify-center gap-2"
  >
    <Icon v-if="loading" name="svg-spinners:ring-resize" size="16" />
    <slot />
  </button>
</template>
