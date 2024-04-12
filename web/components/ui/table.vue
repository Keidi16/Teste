<script setup lang="ts">
defineProps<{
  users: object | null;
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
          Nome
        </td>
        <td
          class="whitespace-normal py-4 text-sm text-white/70 uppercase font-medium sm:px-3"
        >
          Email
        </td>
        <td
          class="whitespace-normal py-4 text-sm text-white/70 uppercase font-medium sm:px-3"
        >
          Email Verificado
        </td>
        <td
          class="whitespace-normal py-4 text-sm text-white/70 uppercase font-medium sm:px-3"
        >
          Cargo
        </td>
        <td
          class="whitespace-normal py-4 text-sm text-white/70 uppercase font-medium sm:px-3"
        >
          Conta criada
        </td>
        <td
          class="whitespace-normal py-4 text-sm text-white/70 uppercase font-medium sm:px-3"
        >
          Ações
        </td>
      </tr>
    </thead>

    <tbody class="">
      <template v-if="users">
        <ui-user-tr v-for="item in users.data" :key="item.id" :user="item" />
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
      :disabled="!users.meta.prev"
      @click="prev()"
      class="px-3 py-1 border border-neutral-700 transition hover:bg-neutral-800 disabled:opacity-70 disabled:bg-neutral-800 disabled:cursor-not-allowed"
    >
      <Icon name="heroicons:chevron-left" /> Previous
    </button>
    <button
      :disabled="!users.meta.next"
      @click="next()"
      class="px-3 py-1 border border-neutral-700 transition hover:bg-neutral-800 disabled:opacity-70 disabled:bg-neutral-800 disabled:cursor-not-allowed"
    >
      Next
      <Icon name="heroicons:chevron-right" />
    </button>
  </div>
</template>
