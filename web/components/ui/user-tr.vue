<script setup lang="ts">
import daysjs from "dayjs";
import type { Log } from "@types";
import { UseImage } from "@vueuse/components";
import { supabase } from "@constants";

defineProps<{
  user: any;
}>();
</script>

<template>
  <tr class="cursor-pointer transition text-neutral-400 hover:bg-neutral-900">
    <td
      class="whitespace-no-wrap hidden py-2 text-sm font-normal sm:px-3 lg:table-cell"
    >
      <div class="flex items-center gap-3">
        <UseImage
          :src="`${supabase}/${user.avatar}`"
          class="w-8 h-8 rounded-full object-cover"
        >
          <template #loading>
            <div class="w-8 h-8 bg-neutral-800/30 rounded-full animate-pulse" />
          </template>
        </UseImage>
        <span class="flex flex-col gap-1">
          <span class="block leading-none">{{ user.name }}</span>
          <span class="block leading-none">{{ `@${user.username}` }}</span>
        </span>
      </div>
    </td>
    <td
      class="whitespace-no-wrap hidden py-1.5 text-sm font-normal sm:px-3 lg:table-cell"
    >
      {{ user.email }}
    </td>
    <td
      class="whitespace-no-wrap hidden py-1.5 text-left text-sm sm:px-3 lg:table-cell lg:text-left"
    >
      {{ user.emailVerifiedAt ? 'sim' : 'não' }}
    </td>
    <td
      class="whitespace-no-wrap hidden py-1.5 text-left text-sm sm:px-3 lg:table-cell lg:text-left"
    >
      {{ user.roles[0] }}
    </td>
    <td
      class="whitespace-no-wrap py-1.5 text-right text-sm sm:px-3 lg:text-left"
    >
      <span class="whitespace-no-wrap hidden py-1.5 text-left text-sm sm:px-3 lg:table-cell lg:text-left">
        {{ daysjs(user.createdAt).locale("pt-br").format("DD/MM/YYYY - h:mm A") }}
      </span>
    </td>
    <td
      class="whitespace-no-wrap py-1.5 text-right text-sm sm:px-3 lg:text-left"
    >
      <span class="whitespace-no-wrap hidden py-1.5 text-left text-sm sm:px-3 lg:table-cell lg:text-left">
        {{ daysjs(user.createdAt).locale("pt-br").format("DD/MM/YYYY - h:mm A") }}
      </span>
    </td>
  </tr>
</template>
