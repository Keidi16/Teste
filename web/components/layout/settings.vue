<script setup lang="ts">
import { useMainStore } from "@stores/app.main";

const user = useMainStore().authUser();
</script>

<template>
  <div class="w-full h-full flex gap-4 overflow-hidden">
    <div class="w-72 h-full p-4 bg-[#141414] default-rounded overflow-y-scroll scrollbar-inbox">
      <ul class="mb-6">
        <li class="text-lg font-medium mb-3">Informações de conta</li>
        <template v-for="item in INFO_SETTING_ITEMS" :key="item.index">
          <li v-if="canAccess(item.roles, user.roles)">
            <nuxt-link
              :to="item.path"
              class="flex items-center justify-between py-2 px-3 default-rounded"
              :class="{ 'bg-[#171717]': item.index % 2 != 0 }"
            >
              <span class="text-sm inline-flex items-center gap-2">
                <Icon :name="item.icon" />
                {{ item.name }}
              </span>
              <Icon name="heroicons:chevron-right-solid" />
            </nuxt-link>
          </li>
        </template>
      </ul>

      <ul class="mb-6">
        <li class="text-lg font-medium mb-3">Informações de conta</li>
        <template v-for="item in COMPANY_INFO" :key="item.index">
          <li v-if="canAccess(item.roles, user.roles)">
            <nuxt-link
              :to="item.path"
              class="flex items-center justify-between py-2 px-3 default-rounded"
              :class="{ 'bg-[#171717]': item.index % 2 != 0 }"
            >
              <span class="text-sm inline-flex items-center gap-2">
                <Icon :name="item.icon" />
                {{ item.name }}
              </span>
              <Icon name="heroicons:chevron-right-solid" />
            </nuxt-link>
          </li>
        </template>
      </ul>

      <ul>
        <li class="text-lg font-medium mb-3">Acessibilidade</li>
        <template v-for="item in ACCESS_SETTING_ITEMS" :key="item.index">
          <li v-if="canAccess(item.roles, user.roles)">
            <nuxt-link
              :to="item.path"
              class="flex items-center justify-between p-2 default-rounded"
              :class="{ 'bg-[#171717]': item.index % 2 != 0 }"
            >
              <span class="text-sm inline-flex items-center gap-2">
                <Icon :name="item.icon" />
                {{ item.name }}
              </span>
              <Icon name="heroicons:chevron-right-solid" />
            </nuxt-link>
          </li>
        </template>
      </ul>
    </div>
    <div class="w-0.5 h-full bg-[#141414]" />
    <div class="flex-1 h-full">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  @apply bg-[#222] text-green-200 shadow-xl;
}
</style>
