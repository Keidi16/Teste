<script setup lang="ts">
import type { SidebarItem } from "@types";
import { useMainStore } from "@stores/app.main";

const user = useMainStore().authUser();
const path = computed(() => useRoute().path);
const sidebarOpen = inject<boolean>("sidebar-open");

const { item } = defineProps<{
  item: SidebarItem;
}>();
</script>

<template>
  <li v-if="canAccess(item.roles, user.roles)" class="w-full h-12">
    <nuxt-link
      @click="
        () => {
          if (item.name === 'Exit') {
            authCookie.deleteToken();
            reloadNuxtApp();
          }
        }
      "
      :to="item.to"
      :exact="false"
      class="w-full h-full inline-flex p-3 items-center gap-2 bg-[#111] default-rounded"
      :class="`${
        path === '/app/' && item.to === '/app/'
          ? 'bg-green-950 text-white'
          : path.includes(item.to) && item.to !== '/app/'
          ? 'bg-green-950 text-white'
          : ''
      }`"
    >
      <Icon
        :name="item.icon"
        :class="{ 'flex-1': !sidebarOpen }"
        class="transition-all ease duration-300"
      />
      <span
        class="block transition-all ease duration-300"
        :class="{ hidden: !sidebarOpen }"
        >{{ item.name }}</span
      >
    </nuxt-link>
  </li>
</template>
