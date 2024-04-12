<script setup lang="ts">
import { z } from "zod";
import { useMainStore } from "@stores/app.main";
import type { LoginResponse } from "@types";

definePageMeta({
  layout: false,
  middleware: ["login-routes"],
});

const { baseURL } = useRuntimeConfig().public;

const form = ref({
  email: "",
  password: "",
});

const validationSchema = z.object({
  email: z
    .string()
    .min(1, "E-mail é um campo obrigatório")
    .email("Insira um email válido"),
  password: z.string().min(1, "Password é um campo obrigatório"),
});

const useApp = useMainStore();
const load = ref(false);
const erro = ref(false);
const errorMessage = ref("");

const { validate, errors, isValid, getError } = useValidator(
  validationSchema,
  form,
  { mode: "lazy" }
);

const onSubmit = async () => {
  await validate();

  if (isValid.value) {
    load.value = true;

    const { data, status, error } = await useMyFetch<LoginResponse>(
      "auth/login",
      {
        method: "POST",
        contentType: "json",
        body: form.value,
      }
    ).finally(() => {
      load.value = false;
    });

    if (status.value !== "success" && error.value?.statusCode === 500) {
      erro.value = true;
      errorMessage.value =
        "Não foi possível estabelecer conexão com o servidor";
      return;
    }

    if (status.value !== "success") {
      erro.value = true;
      errorMessage.value = error.value?.data.message;
      return;
    }

    authCookie.setToken(data.value.token);
    useApp.storeUser(data.value.user);

    navigateTo("/app");
  }

  load.value = false;
};
</script>

<template>
  <section class="w-full h-screen bg-[#111] flex justify-center items-center">
    <div class="bg-[#131313] p-8 w-[380px] rounded-2xl">
      <img src="@images/logotipo.png" alt="" class="w-40 mx-auto mb-4" />
      <h1 class="text-white text-center mb-6">Digite suas credenciais</h1>
      <form @submit.prevent="onSubmit">
        <div class="mb-4">
          <input
            type="email"
            name="email"
            v-model="form.email"
            placeholder="Email"
            class="bg-[#222] w-full text-sm p-3 rounded-lg focus"
          />
          <span v-if="getError('email')" class="form-error">
            {{ getError("email") }}
          </span>
        </div>
        <div class="mb-4">
          <input
            type="password"
            name="password"
            v-model="form.password"
            placeholder="Palavra-passe"
            class="bg-[#222] w-full text-sm p-3 rounded-lg"
          />
          <span v-if="getError('password')" class="form-error">
            {{ getError("password") }}
          </span>
        </div>
        <div class="mb-4">
          <ui-button :loading="load">Entrar</ui-button>
        </div>
        <transition appear name="fade-in">
          <div
            v-show="erro"
            class="w-full h-14 p-2 bg-red-600/60 rounded-lg flex items-center justify-center"
          >
            <span class="text-sm text-white/60 text-center">{{
              errorMessage
            }}</span>
          </div>
        </transition>
      </form>
    </div>
  </section>
</template>
