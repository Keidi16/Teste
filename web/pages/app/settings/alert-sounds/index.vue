<script setup lang="ts">
import { useAppAlarm } from "@stores/app.alarm";

definePageMeta({
  title: "Configurações / Sons de alerta",
  middleware: "auth-routes",
});

const { ALARMS } = useAppAlarm();
</script>

<template>
  <layout-settings>
    <section class="w-full h-full overflow-y-scroll scrollbar-inbox">
      <h1 class="text-xl text-white/90 font-semibold mb-2">Sons de Alerta</h1>
      <p class="text-sm max-w-3xl mb-4">
        O som escolhido será o som predefinido para tocar sempre que um actividade
        critica estiver acontecento ou um teste de penetração for efectuado.
      </p>
      <form @submit.prevent="onSubmit" class="max-w-3xl">
        <label for="song" class="block text-sm font-medium mb-2">
          Escolha o som de alerta:
        </label>
        <ui-alert-sound
          v-for="alarm in ALARMS"
          :key="alarm.id"
          :alarm="alarm"
          :iPlayer="iPlayer"
        />
      </form>
    </section>
  </layout-settings>
</template>
