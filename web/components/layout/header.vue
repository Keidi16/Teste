<script setup lang="ts">
import { supabase } from "@constants";
import { UseImage } from "@vueuse/components";
import { useMainStore } from "@stores/app.main";

const user = useMainStore().authUser();
const title = computed(() => useRoute().meta.title);
</script>

<template>
  <header
    class="bg-[#141414] h-20 flex items-center justify-between p-4 default-rounded"
  >
    <div>
      <span class="text-xl font-medium">{{ title }}</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="text-right">
        <span class="block font-bold leading-tight mb-1">{{ user?.name }}</span>
        <span class="text-sm block font-normal leading-none">{{
          user?.roles[0]
        }}</span>
      </div>
      <UseImage
        :src="`${supabase}/${user?.avatar}`"
        crossorigin="anonymous"
        class="w-12 h-12 bg-[#222] rounded-lg object-cover"
      >
        <template #loading>
          <div class="w-12 h-12 bg-[#222] rounded-lg animate-pulse" />
        </template>
      </UseImage>
    </div>
  </header>
</template>
