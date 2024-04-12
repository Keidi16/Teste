<script setup lang="ts">
type Tr = {
  id: number;
  text: string;
};

type Props = {
  values: Array<Tr>;
};

defineProps<Props>();
</script>

<template>
  <tr tabindex="0" class="h-16 bg-[#181818]">
    <td v-for="title in values" :key="title.id">
      <div
        class="flex items-center"
        :class="`${title.id === 1 ? 'pl-5' : ''}`"
      >
        <p class="font-medium leading-none">
          {{ title.text }}
        </p>
      </div>
    </td>
  </tr>
</template>