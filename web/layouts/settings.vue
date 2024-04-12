<script setup lang="ts"></script>

<template>
  <div
    class="max-w-screen-2xl w-full h-screen mx-auto p-4 flex gap-4 overflow-hidden"
  >
    <aside class="relative w-20">
      <layout-sidebar />
    </aside>

    <main class="h-[calc(100vh-32px)] flex-1 flex flex-col gap-4">
      <layout-header />

      <layout-settings>
        <slot />
      </layout-settings>
    </main>
    <layout-connection-status />
  </div>
</template>
