<script setup lang="ts">
import { useMainStore } from "@stores/app.main";

const layout = computed(() => useRoute().path);
const user = computed(() => useMainStore().authUser());

const visible = ref(true);
const container = ref(null);
onClickOutside(container, (event) => (visible.value = false));
</script>

<template>
  <div
    v-if="user.hasCompany && visible && layout !== '/auth/login'"
    class="fixed top-0 left-0 w-full h-full p-8 bg-black/50 backdrop-blur-md"
  >
    <div class="w-full h-full flex items-end justify-center">
      <transition name="fade">
        <div
          v-show="!user.hasCompany && visible"
          ref="container"
          class="max-w-4xl w-full p-8 bg-[#151515] rounded-3xl shadow-xl"
        >
          <div class="relative grid grid-cols-7">
            <div class="col-span-6">
              <h3 class="text-lg text-white/90 font-semibold mb-2">
                Configurações incompletas!!!
              </h3>
              <p class="text-sm leading-tight">
                Para o bom funcionamento do sistema, termine de efectuar as
                configurações
                <nuxt-link
                  to="/app/settings/company"
                  class="border-dashed border-b border-neutral-400 transition hover:text-white"
                >
                  adicionando uma organização.
                </nuxt-link>
              </p>
            </div>
            <div
              @click="() => (visible = false)"
              class="cursor-pointer absolute right-0 border border-neutral-800 text-neutral-600 p-2 flex items-center justify-center rounded-lg transition hover:text-neutral-200 hover:bg-neutral-800"
            >
              <Icon name="heroicons:x-mark-solid" />
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.7s ease;
}

.fade-enter-from {
  transform: translate3d(0, 100px, 0);
}

.fade-leave-to {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
