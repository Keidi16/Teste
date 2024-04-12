<script setup lang="ts">
import { z } from "zod";
import { toast } from "vue3-toastify";

definePageMeta({
  title: "Configurações / Alterar palavra-passe",
  middleware: "auth-routes",
});

const { baseURL } = useRuntimeConfig().public;

const validationSchema = z.object({
  password: z
    .string()
    .min(3, "Senha é um campo obrigatório")
    .regex(
      RegEx.PASSWORD,
      "Senha deve possuir 8 caracters, incluíndo números e caracters especiais"
    ),

  newPassword: z
    .string()
    .min(3, "Nova Senha é um campo obrigatório")
    .regex(
      RegEx.PASSWORD,
      "Senha deve possuir 8 caracters, incluíndo números e caracters especiais"
    ),
});

const form = ref({
  password: "",
  newPassword: "",
});

const { validate, errors, isValid, getError } = useValidator(
  validationSchema,
  form,
  { mode: "lazy" }
);

const onSubmit = async () => {
  await validate();

  if (isValid.value) {
    const { status, error } = await useFetch(
      `${baseURL}/auth/change-password`,
      {
        method: "PATCH",
        headers: createHeader(),
        body: {
          currentPassword: form.value.password,
          newPassword: form.value.newPassword,
        },
      }
    );

    if (status.value !== "success") {
      toast.error(error.value.data.message, {
        autoClose: false,
      });

      return;
    }

    toast.success("A sua palavra-passe foi alterada!");
    setTimeout(() => {
      reloadNuxtApp();
    }, 3500);
  }
};
</script>

<template>
  <layout-settings>
    <div class="w-full h-full">
      <form
        @submit.prevent="onSubmit"
        class="w-full h-full flex justify-center items-center"
      >
        <div class="max-w-sm w-full flex flex-col gap-3">
          <ui-input
            :label="true"
            labelText="Senha actual"
            type="password"
            name="password"
            v-model="form.password"
            placeholder="**********"
            :onError="getError('password')"
          />

          <ui-input
            :label="true"
            labelText="Nova senha"
            type="password"
            name="newPassword"
            v-model="form.newPassword"
            placeholder="**********"
            :onError="getError('newPassword')"
          />

          <div>
            <button
              type="submit"
              class="w-full h-10 bg-green-800 default-rounded"
            >
              <!-- <Icon name="svg-spinners:ring-resize" /> -->
              <span v-show="true"> Alterar senha </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  </layout-settings>
</template>
