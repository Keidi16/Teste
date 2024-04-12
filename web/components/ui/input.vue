<script setup lang="ts">
import { type InputTypeHTMLAttribute } from "vue";

const value = defineModel();

withDefaults(
  defineProps<{
    label: boolean;
    labelText: string;
    type: InputTypeHTMLAttribute;
    name: string;
    placeholder: string;
    onError: string | undefined;
    disabled: boolean;
    rounded: boolean;
  }>(),
  {
    disabled: false,
    rounded: true,
  }
);
</script>

<template>
  <div class="w-full">
    <label v-if="label" :for="name" class="text-sm block mb-1">{{
      labelText
    }}</label>
    <input
      :type="type"
      :name="name"
      v-model="value"
      :disabled="disabled"
      :placeholder="placeholder"
      class="form-input disabled:bg-neutral-800/60 disabled:cursor-not-allowed"
      :class="{ 'border-red-400': !!onError, '!rounded-md': rounded }"
    />
    <span class="form-error">{{ onError }}</span>
  </div>
</template>
