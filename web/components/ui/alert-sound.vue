<script setup lang="ts">
import { useAppAlarm } from "@stores/app.alarm";

const useAlarm = useAppAlarm();

const { alarm } = defineProps<{
  alarm: {
    id: number;
    name: string;
    title: string;
    sound: string;
  };
}>();

const iPlayer = computed(() => useAlarm.PLAYER);
const vModel = alarmCookie.getAlarm();

function Play() {
  useAlarm.playSound(alarm);
}

function changeAlarm() {
  alarmCookie.setAlarm(alarm.name);
}
</script>

<template>
  <div
    class="bg-[#151515] p-2 flex items-center justify-between default-rounded"
  >
    <div @click="changeAlarm" class="flex items-center gap-2">
      <input type="radio" name="alarm" :id="`alarm${alarm.id}`" :value="alarm.name" v-model="vModel" />
      <label :for="`alarm${alarm.id}`"  class="text-sm">{{ alarm.title }}</label>
    </div>

    <div
      @click="Play"
      class="cursor-pointer w-8 p-1 flex justify-center items-center"
    >
      <Icon v-show="alarm.id !== iPlayer.trackID" name="heroicons:play-solid" />
      <Icon
        v-show="iPlayer.trackID === alarm.id && iPlayer.playing"
        name="heroicons:pause-solid"
      />
    </div>
  </div>
</template>
