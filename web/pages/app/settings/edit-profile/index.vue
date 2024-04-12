<script setup lang="ts">
import { z } from "zod";
import { toast } from "vue3-toastify";

import { supabase } from "@constants";
import { UseImage } from "@vueuse/components";
import { useMainStore } from "@stores/app.main";

const user = useMainStore().authUser();
const { baseURL } = useRuntimeConfig().public;

definePageMeta({
  title: "Configurações / Editar perfil",
  middleware: "auth-routes",
});

const validationSchema = z.object({
  avatar: z.string().min(1, "Avatar é um campo obrigatório"),
  name: z.string().min(1, "Nome é um campo obrigatório"),
  email: z
    .string()
    .min(1, "Email é um campo obrigatório")
    .email("Insira um email válido"),
  username: z.string().min(1, "Username é um campo obrigatório"),
});

const form = ref({
  avatar: user.value?.avatar,
  name: user.value?.name,
  username: user.value?.username,
  email: user.value?.email,
});

const buttonDisabled = computed(
  () =>
    form.value.avatar === user.value?.avatar &&
    form.value.name === user.value?.name &&
    form.value.username === user.value?.username &&
    form.value.email === user.value?.email
);

const { validate, errors, isValid, getError } = useValidator(
  validationSchema,
  form,
  { mode: "lazy" }
);

const onSubmit = async () => {
  await validate();

  if (isValid.value) {
    await sendForm();
  }
};

const inputFile = ref<HTMLInputElement | null>(null);
const fileError = ref("");
const onChangeFile = async (e) => {
  const file = e.target.files[0];

  const valid = validationFile(file);

  if (typeof valid != "boolean") {
    fileError.value = valid;
    return;
  }

  form.value.avatar = URL.createObjectURL(file);
};

const sendForm = async () => {
  const formData = new FormData(formSubmit);

  const { status, error } = await useFetch(
    `${baseURL}/users/${user.value?.id}`,
    {
      method: "PATCH",
      headers: createHeader(),
      body: formData,
    }
  );

  if (status.value !== "success") {
    toast.error(error.value?.data.message, {
      autoClose: false,
    });

    return;
  }

  toast.success("Informações actualizadas!");
  setTimeout(() => {
    reloadNuxtApp();
  }, 3500);
};
</script>

<template>
  <layout-settings>
    <div class="w-full h-full">
      <form
        @submit.prevent="onSubmit"
        id="formSubmit"
        class="w-full h-full flex justify-center items-center"
      >
        <div class="max-w-sm w-full flex flex-col justify-center gap-8">
          <div class="text-center">
            <div class="relative w-24 h-24 mx-auto">
              <input
                name="avatar"
                type="file"
                accept=".png, .jpg, .svg"
                ref="inputFile"
                @change="onChangeFile"
                class="hidden w-full h-full cursor-pointer"
              />
              <span
                @click="inputFile?.click()"
                class="cursor-pointer absolute z-10 -bottom-2 -right-2 bg-green-800 w-6 h-6 flex items-center justify-center rounded-md hover:text-white"
              >
                <Icon name="heroicons:pencil-square-16-solid" />
              </span>
              <UseImage
                :src="`${
                  form.avatar === user?.avatar
                    ? `${supabase}/${user?.avatar}`
                    : form.avatar
                }`"
                crossorigin="anonymous"
                class="absolute w-full h-full object-cover default-rounded"
              >
                <template #loading>
                  <div
                    class="w-full h-full b-[#222] animate-pulse default-rounded"
                  />
                </template>
              </UseImage>
            </div>
            <span v-if="fileError.length > 0" class="form-error">
              {{ fileError }}
            </span>
          </div>
          <div class="max-w-md w-full flex flex-col gap-3">
            <ui-input
              :label="true"
              labelText="Nome completo"
              type="text"
              name="name"
              v-model="form.name"
              placeholder="Rex User"
              :onError="getError('name')"
            />
            <ui-input
              :label="true"
              labelText="Username"
              type="text"
              name="username"
              v-model="form.username"
              placeholder="Ursername"
              :onError="getError('username')"
            />

            <ui-input
              :label="true"
              labelText="E-mail"
              type="email"
              name="email"
              v-model="form.email"
              placeholder="E-mail"
              :onError="getError('email')"
            />

            <div>
              <button
                type="submit"
                :disabled="buttonDisabled"
                class="w-full h-10 bg-green-800 default-rounded disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <!-- <Icon name="svg-spinners:ring-resize" /> -->
                <span v-show="true"> Concluir edição </span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </layout-settings>
</template>
