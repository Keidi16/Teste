<script setup lang="ts">
import { useMainStore } from "@stores/app.main";
import { onMounted, onBeforeUnmount } from "vue";
import TerminalService from "primevue/terminalservice";

definePageMeta({
  title: "Terminal",
  middleware: "auth-routes",
});

const user = useMainStore().authUser();

const useTerminal = async (command: string) => {
  const { data } = await useFetch("/api/terminal", {
    method: "POST",
    body: { command: command },
  });

  console.log(data.value);

  return data.value;
};

onMounted(() => {
  TerminalService.on("command", commandHandler);
});

onBeforeUnmount(() => {
  TerminalService.off("command", commandHandler);
});

const commandHandler = async (text) => {
  let response;
  let argsIndex = text.indexOf(" ");
  let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

  switch (command) {
    case "date":
      response = "Today is " + new Date().toDateString();
      break;

    case "greet":
      response = "Hola " + text.substring(argsIndex + 1);
      break;

    case "random":
      response = Math.floor(Math.random() * 100);
      break;

    default:
      response = await useTerminal(command);
    // response = "Unknown command: " + command;
  }

  TerminalService.emit("response", response);
};
</script>

<template>
  <div>
    <p>
      Enter "date" to display the current date, "greet {0}" for a message and
      "random" to get a random number.
    </p>
    <Terminal
      welcomeMessage="Bem vindo ao Terminal REX"
      :prompt="`${user?.username} $`"
      aria-label="PrimeVue Terminal Service"
    />
  </div>
</template>
