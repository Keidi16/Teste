<script setup lang="ts">
import { z } from "zod";
import { toast } from "vue3-toastify";
import { useMainStore } from "@stores/app.main";

definePageMeta({
  title: "Configurações / Criar organização",
  middleware: "auth-routes",
});

const { baseURL } = useRuntimeConfig().public;
const user = useMainStore().authUser();

const { data: COMPANY } = await useFetch(`${baseURL}/company/my`, {
  headers: createHeader(),
});

const validationSchema = z.object({
  name: z.string().min(3, "Nome é obrigatório"),
  email: z
    .string()
    .min(6, "Email é obrigatório")
    .email("Insira um email válido"),
  website: z
    .string()
    .min(3, "Website é obrigatório")
    .regex(RegEx.URL, "Website inválido"),
  description: z.string().min(3, "Descrição é obrigatório"),
});

const form = ref({
  name: "",
  email: "",
  website: "",
  description: "",
});

const { validate, errors, isValid, getError } = useValidator(
  validationSchema,
  form,
  { mode: "lazy" }
);

const onSubmit = async () => {
  await validate();

  if (isValid.value) {
    const { status, error } = await useFetch(`${baseURL}/company`, {
      method: "POST",
      headers: createHeader(),
      body: form.value,
    });

    if (status.value !== "success") {
      toast.error(error.value.data.message, {
        autoClose: false,
      });

      return;
    }

    toast.success("Organização criada com sucesso!");
    setTimeout(() => {
      reloadNuxtApp();
    }, 3500);
  }

  console.log(errors.value);
};
</script>

<template>
  <layout-settings>
    <div class="relative w-full h-full">
      <layout-company v-show="user.hasCompany">
        <span> Você só pode ter uma única organização. </span>
      </layout-company>
      <form
        @submit.prevent="onSubmit"
        class="w-full h-full flex justify-center items-center"
      >
        <div class="max-w-sm w-full flex flex-col gap-3">
          <ui-input
            :label="true"
            labelText="Nome da organização"
            type="text"
            name="name"
            v-model="form.name"
            :placeholder="user.hasCompany ? COMPANY.name : 'Rex Company'"
            :disabled="user.hasCompany"
            :onError="getError('name')"
          />
          <ui-input
            :label="true"
            labelText="E-mail"
            type="text"
            name="email"
            v-model="form.email"
            :placeholder="user.hasCompany ? COMPANY.email : 'geral@rex.ao'"
            :disabled="user.hasCompany"
            :onError="getError('email')"
          />
  
          <ui-input
            :label="true"
            labelText="Website"
            type="text"
            name="website"
            v-model="form.website"
            :placeholder="user.hasCompany ? COMPANY.website : 'www.rex.rampart.ao'"
            :disabled="user.hasCompany"
            :onError="getError('website')"
          />
  
          <ui-textarea
            :label="true"
            labelText="Descrição"
            name="description"
            v-model="form.description"
            :placeholder="
              user.hasCompany ? COMPANY.description : 'Descrição da sua organização...'
            "
            :disabled="user.hasCompany"
            :onError="getError('description')"
          />
  
          <div>
            <button
              :disabled="user.hasCompany"
              type="submit"
              class="w-full h-10 bg-green-800 default-rounded disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <!-- <Icon name="svg-spinners:ring-resize" /> -->
              <span v-show="true"> Criar organização </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  </layout-settings>
</template>
