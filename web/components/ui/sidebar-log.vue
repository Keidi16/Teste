<script setup lang="ts">
import { useAppSidebarLog } from "@stores/app.sidebar-log";
import { onClickOutside, useEventListener } from "@vueuse/core";

const useSidebarLog = useAppSidebarLog();

const visible = ref(true);
const container = ref(null);
const show = computed(() => useSidebarLog.show);

const apikey = "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";

onClickOutside(container, (event) => {
  useSidebarLog.handleShow(false);
});

useEventListener(document, "keydown", (evt) => {
  evt.key === "Escape" ? useSidebarLog.handleShow(false) : "";
});
</script>

<template>
  <div
    v-show="show"
    class="w-full h-screen fixed top-0 left-0 bg-black/60 flex justify-end"
  >
    <transition name="fade">
      <div
        v-show="show"
        ref="container"
        class="max-w-md w-full h-full p-6 bg-[#151515] text-sm rounded-l-2xl flex flex-col"
      >
        <div
          class="flex justify-between items-center py-4 mb-6 border-b border-[#222]"
        >
          <h2 class="text-white/80 font-semibold uppercase">
            Mais detalhes do log
          </h2>
          <button
            @click="useSidebarLog.handleShow(false)"
            class="p-2 border border-neutral-700 rounded-md transition hover:bg-neutral-700 flex items-center justify-center"
          >
            <Icon name="heroicons:x-mark-solid" />
          </button>
        </div>
        <div class="h-full overflow-auto scrollbar-inbox">
          <div class="mb-3">
            <span class="block text-white/80 font-medium leading-snug mb-1">
              Nome do utilizador
            </span>
            <span class="block w-full h-5 bg-neutral-800 rounded animate-pulse"></span>
            <span v-if="false" class="block leading-tight">Helder Cambuta</span>
          </div>
          <div class="mb-3">
            <span class="block text-white/80 font-medium leading-snug mb-1">
              E-mail
            </span>
            <span class="block w-full h-5 bg-neutral-800 rounded animate-pulse"></span>
            <span v-if="false" class="block leading-tight">helder.cambuta@rampart.ao</span>
          </div>
          <div class="mb-3">
            <span class="block text-white/80 font-medium leading-snug mb-1">
              Cargo
            </span>
            <span class="block w-full h-5 bg-neutral-800 rounded animate-pulse"></span>
            <span v-if="false" class="block leading-tight">Administrador</span>
          </div>
          <div class="mb-3">
            <span class="block text-white/80 font-medium leading-snug mb-1">
              Endpoint
            </span>
            <span class="block w-full h-5 bg-neutral-800 rounded animate-pulse"></span>
            <span v-if="false" class="block leading-tight">/api/v1/company/my</span>
          </div>
          <div class="flex gap-2 mb-3">
            <div class="w-full">
              <span class="block text-white/80 font-medium leading-snug mb-1">
                IP de acesso
              </span>
              <span class="block w-full h-5 bg-neutral-800 rounded animate-pulse"></span>
              <span v-if="false" class="block leading-tight">127.0.0.1</span>
            </div>
            <div class="w-full">
              <span class="block text-white/80 font-medium leading-snug mb-1">
                Ação
              </span>
              <span class="block w-full h-5 bg-neutral-800 rounded animate-pulse"></span>
              <button
              v-if="false"
                class="block leading-tight px-2 py-0.5 bg-yellow-200 text-neutral-900 rounded"
              >
                Get
              </button>
            </div>
          </div>
          <div class="flex gap-2 mb-3">
            <div class="w-full">
              <span class="block text-white/80 font-medium leading-snug mb-1">
                Status
              </span>
              <span class="block w-full h-5 bg-neutral-800 rounded animate-pulse"></span>
              <button
              v-if="false"
                class="block leading-tight px-2 py-0.5 bg-green-200 text-neutral-900 rounded"
              >
                Sucesso
              </button>
            </div>
            <div class="w-full">
              <span class="block text-white/80 font-medium leading-snug mb-1">
                Data
              </span>
              <span class="block w-full h-5 bg-neutral-800 rounded animate-pulse"></span>
              <!-- <span class="block leading-tight"> 20/03/2024 - 12h30 </span> -->
            </div>
          </div>
          <div class="mb-3">
            <span class="block text-white/80 font-medium leading-snug mb-1">
              Descrição da actividade
            </span>
            <span class="block w-full h-5 mb-1 bg-neutral-800 rounded animate-pulse"></span>
            <span class="block w-full h-5 mb-1 bg-neutral-800 rounded animate-pulse"></span>
            <span class="block w-full h-5 mb-1 bg-neutral-800 rounded animate-pulse"></span>
            <span class="block w-full h-5 mb-1 bg-neutral-800 rounded animate-pulse"></span>
            <span v-if="false" class="block leading-tight">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
              placeat blanditiis at sint incidunt iusto consequuntur modi neque
              reiciendis temporibus? Magnam ratione provident aut unde commodi
              illum, natus officiis at. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Quia placeat blanditiis at sint incidunt iusto
              consequuntur modi neque reiciendis temporibus? Magnam ratione
              provident aut unde commodi illum, natus officiis at.
            </span>
          </div>

          <div class="mb-3">
            <span class="block text-white/80 font-medium leading-snug mb-2"
              >Operações</span
            >
            <span class="flex items-center gap-4">
              <span class="block w-full h-5 bg-neutral-800 rounded animate-pulse"></span>
              <button
                v-if="false"
                class="flex items-center gap-2 cursor-pointer px-3 py-1 text-white font-medium border-[0.5px] border-red-700 transition rounded hover:bg-red-700"
              >
                <Icon name="heroicons:trash" class="leading-none" />
                <span class="block leading-snug"> Deletar </span>
              </button>

              <span class="block w-full h-5 bg-neutral-800 rounded animate-pulse"></span>
              <button
                v-if="false"
                class="flex items-center gap-2 cursor-pointer px-3 py-1 text-white font-medium border-[0.5px] border-green-700 transition rounded hover:bg-green-700"
              >
                <Icon
                  name="heroicons:document-arrow-down"
                  class="leading-none"
                />
                <span class="block leading-snug"> Exportar </span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.fade-enter-from {
  transform: translate3d(100px, 0, 0);
}

.fade-leave-to {
  transform: translate3d(100px, 0, 0);
  opacity: 0;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
