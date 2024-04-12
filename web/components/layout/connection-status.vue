<script setup lang="ts">
const showConnectionError = ref(false);
const showConnectionRestored = ref(false);
const { isOnline } = useNavigatorOnline();

watch(isOnline, (value, oldValue) => {
  if (value && !oldValue) {
    showConnectionError.value = false;
    showConnectionRestored.value = true;
    setInterval(() => {
      showConnectionRestored.value = false;
    }, 4000);
  }
  if (!value && oldValue) {
    showConnectionError.value = true;
  }
});
</script>

<template>
  <transition name="fade">
    <div
      v-show="!isOnline && showConnectionError"
      class="fixed max-w-sm w-full px-8 py-4 bg-[#FAFAFA] bottom-4 left-4 rounded-2xl text-neutral-800"
    >
      <div class="w-full h-full flex gap-4">
        <Icon
          name="heroicons:signal-slash-solid"
          size="32"
          class="text-neutral-400"
        />
        <div class="flex-1">
          <span
            class="flex text-neutral-600 font-medium mb-1 justify-between items-center"
          >
            A conexão falhou!
            <button
              @click="() => (showConnectionError = false)"
              class="text-neutral-400 transition hover:text-neutral-900"
            >
              <Icon name="heroicons:x-mark-solid" />
            </button>
          </span>
          <span class="block text-sm text-neutral-500 leading-tight">
            Não foi possível estabelecer conexão com a internet.
          </span>
        </div>
      </div>
    </div>
  </transition>
  <transition name="fade">
    <div
      v-show="isOnline && showConnectionRestored"
      class="fixed max-w-sm w-full px-8 py-4 bg-[#FAFAFA] bottom-4 left-4 rounded-2xl text-neutral-800"
    >
      <div class="w-full h-full flex gap-4">
        <Icon name="heroicons:wifi-solid" size="32" class="text-blue-600" />
        <div class="flex-1">
          <span class="text-neutral-600 font-medium mb-1">
            Conexão restaurada!
          </span>
          <span class="block text-sm text-neutral-500 leading-tight">
            A sua conexão com a internet foi restabelecida.
          </span>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-enter-from {
  transform: translate3d(0, 100px, 0);
}

.fade-leave-to {
  transform: translate3d(0, 100px, 0);
  opacity: 0;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
