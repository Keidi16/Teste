<script setup lang="ts">
onMounted(() => {
  alarmCookie.defineDefaultAlarm();
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <ui-notification-alarm />
  <ui-notification-create-company />
</template>
