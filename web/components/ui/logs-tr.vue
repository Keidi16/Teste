<script setup lang="ts">
import daysjs from "dayjs";
import type { Log } from "@types";
import { supabase } from "@constants";
import { UseImage } from "@vueuse/components";
import { useAppSidebarLog } from "@stores/app.sidebar-log";

const { handleShow } = useAppSidebarLog();

defineProps<{
  log: Log;
}>();
</script>

<template>
  <tr
    @click="handleShow(true)"
    class="cursor-pointer transition text-neutral-400 hover:bg-neutral-900"
  >
    <td
      class="whitespace-no-wrap hidden py-2 text-sm font-normal sm:px-3 lg:table-cell"
    >
      <div class="flex items-center gap-3">
        <UseImage
          :src="`${supabase}/${log.user.avatar}`"
          class="w-8 h-8 rounded-full object-cover"
        >
          <template #loading>
            <div class="w-8 h-8 bg-neutral-800/30 rounded-full animate-pulse" />
          </template>
        </UseImage>
        <span class="flex flex-col gap-1">
          <span class="block leading-none">{{ log.userName }}</span>
          <span class="block leading-none">{{ log.userEmail }}</span>
        </span>
      </div>
    </td>
    <td
      class="whitespace-no-wrap hidden py-1.5 text-sm font-normal sm:px-3 lg:table-cell"
    >
      {{ log.user.roles[0] }}
    </td>
    <td
      class="whitespace-no-wrap hidden py-1.5 text-left text-sm sm:px-3 lg:table-cell lg:text-left"
    >
      {{ log.deviceIP }}
    </td>
    <td
      class="whitespace-no-wrap hidden py-1.5 text-left text-sm sm:px-3 lg:table-cell lg:text-left"
    >
      {{ log.endpoint }}
    </td>
    <td
      class="whitespace-no-wrap hidden py-1.5 text-left text-sm sm:px-3 lg:table-cell lg:text-left"
    >
      {{ log.method }}
    </td>
    <td
      class="whitespace-no-wrap py-1.5 text-right text-sm sm:px-3 lg:text-left"
    >
      <span class="py-1 px-2 bg-green-800/40 rounded-full">{{
        StatusCode(log.statusCode)
      }}</span>
    </td>
    <td
      class="whitespace-no-wrap hidden py-1.5 text-sm font-normal sm:px-3 lg:table-cell"
    >
      <span
        class="whitespace-no-wrap hidden py-1.5 text-left text-sm sm:px-3 lg:table-cell lg:text-left"
        >{{
          daysjs(log.createdAt).locale("pt-br").format("DD/MM/YYYY - h:mm A")
        }}</span
      >
    </td>
  </tr>
</template>
