<script setup lang="ts">
defineProps<{
  logs: object | null;
  next: () => void | undefined;
  prev: () => void | undefined;
}>();
</script>

<template>
  <table class="w-full">
    <thead
      class="bg-[#151515] table-header-group default-rounded overflow-hidden"
    >
      <tr class="">
        <td
          class="whitespace-normal py-4 text-sm text-white/70 uppercase font-medium sm:px-3"
        >
          Usuário
        </td>
        <td
          class="whitespace-normal py-4 text-sm text-white/70 uppercase font-medium sm:px-3"
        >
          Cargo
        </td>
        <td
          class="whitespace-normal py-4 text-sm text-white/70 uppercase font-medium sm:px-3"
        >
          IP do dispositivo
        </td>
        <td
          class="whitespace-normal py-4 text-sm text-white/70 uppercase font-medium sm:px-3"
        >
          Endpoint
        </td>
        <td
          class="whitespace-normal py-4 text-sm text-white/70 uppercase font-medium sm:px-3"
        >
          Acção
        </td>
        <td
          class="whitespace-normal py-4 text-sm text-white/70 uppercase font-medium sm:px-3"
        >
          Status
        </td>
        <td
          class="whitespace-normal py-4 text-sm text-white/70 uppercase font-medium sm:px-3"
        >
          Data
        </td>
      </tr>
    </thead>

    <tbody class="">
      <template v-if="logs">
        <ui-logs-tr v-for="item in logs.data" :key="item.id" :log="item" />
      </template>
      <template v-else>
        <tr>
          <td colspan="7" class="h-[300px] text-center">
            <span class="text-sm text-neutral-500">Não existem registros de logs no momento.</span>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <div class="mt-2 w-full flex items-center justify-center gap-2 text-sm">
    <button
      :disabled="!logs.meta.prev"
      @click="prev()"
      class="px-3 py-1 border border-neutral-700 transition hover:bg-neutral-800 disabled:opacity-70 disabled:bg-neutral-800 disabled:cursor-not-allowed"
    >
      <Icon name="heroicons:chevron-left" /> Previous
    </button>
    <button
      :disabled="!logs.meta.next"
      @click="next()"
      class="px-3 py-1 border border-neutral-700 transition hover:bg-neutral-800 disabled:opacity-70 disabled:bg-neutral-800 disabled:cursor-not-allowed"
    >
      Next
      <Icon name="heroicons:chevron-right" />
    </button>
  </div>
</template>
