<script setup lang="ts">
import { type InputTypeHTMLAttribute } from "vue";

type role = "admin" | "analista" | "auditor";

const value = defineModel();

withDefaults(
  defineProps<{
    label: boolean;
    labelText: string;
    name: string;
    placeholder: string;
    onError: string | undefined;
    options: role[];
    disabled: boolean;
  }>(),
  {
    disabled: false,
  }
);
</script>

<template>
  <div class="w-full">
    <label v-if="label" :for="name" class="text-sm block mb-1">{{
      labelText
    }}</label>
    <select
      :name="name"
      v-model="value"
      :disabled="disabled"
      class="form-select default-rounded disabled:bg-neutral-800/60 disabled:cursor-not-allowed"
      :class="{ '!border-red-400': !!onError }"
    >
      <option value="" selected>{{ placeholder }}</option>
      <option v-for="(item, index) in options" :key="index">{{ item }}</option>
    </select>
    <span class="form-error">{{ onError }}</span>
  </div>
</template>

<style scoped lang="scss">
select {
  @apply block w-full h-9 text-sm text-white/60 bg-transparent border border-neutral-600 focus:outline-none focus:border-green-800 focus:outline-offset-2 focus:outline-green-950;
  appearance: none;
  padding: 8px 12px;
  margin: 0;

  &::-ms-expand {
    display: none;
  }
}

select option {
  @apply bg-[#222] border-none outline-none text-white;
}
</style>
