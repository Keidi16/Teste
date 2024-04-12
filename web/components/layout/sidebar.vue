<script setup lang="ts">
import { SIDEBARLIST } from "@utils/sidebar-list";

const open = ref(false);

provide('sidebar-open', open);
</script>

<template>
  <div
    @mouseenter="open = !open"
    @mouseleave="open = !open"
    class="w-20 h-[calc(100vh-32px)] transition-all ease duration-300"
    :class="{ 'absolute w-56': open }"
  >
    <div class="h-full flex flex-col w-full">
      <div class="bg-[#141414] h-20 flex items-center p-4 mb-4 default-rounded">
        <img
          src="@images/logotipo.png"
          alt="Logotipo"
          width="100px"
          class="transition-all ease duration-300"
          :class="{ hidden: !open }"
        />
        <img
          src="@images/logo.png"
          alt="Logotipo"
          width="43px"
          class="transition-all ease duration-300"
          :class="{ hidden: open }"
        />
      </div>
      <nav class="bg-[#141414] flex-1 p-4 default-rounded">
        <ul class="flex flex-col gap-2">
          <ui-nav-item
            v-for="item in SIDEBARLIST"
            :key="item.name"
            :item="item"
          />
        </ul>
      </nav>
    </div>
  </div>
</template>