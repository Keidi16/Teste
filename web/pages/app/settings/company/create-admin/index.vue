<script setup lang="ts">
import { z } from "zod";
import { toast } from "vue3-toastify";
import { useMainStore } from "@stores/app.main";

definePageMeta({
  title: "Configurações / Criar Administrador",
  middleware: "auth-routes",
});

const { baseURL } = useRuntimeConfig().public;
const user = useMainStore().authUser();

const validationSchema = z.object({
  name: z.string().min(3, "Nome é um campo obrigatório"),
  username: z.string().min(3, "Username é um campo obrigatório"),
  email: z
    .string()
    .min(6, "Email é um campo obrigatório")
    .email("Insira um email válido"),
  roles: z.string().min(3, "Nível de acesso é um campo obrigatório"),
  password: z
    .string()
    .min(3, "Senha é um campo obrigatório")
    .regex(
      RegEx.PASSWORD,
      "Senha deve possuir 8 caracters, incluíndo números e caracters especiais"
    ),
});

const form = ref({
  name: "",
  username: "",
  email: "",
  roles: "admin",
  password: "",
});

const { validate, errors, isValid, getError } = useValidator(
  validationSchema,
  form,
  { mode: "lazy" }
);

const onSubmit = async () => {
  await validate();

  if (isValid.value) {
    const token = authCookie.getToken();

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("authorization", `Bearer ${token}`);

    const { data, status, error } = await useFetch(`${baseURL}/company/admin`, {
      method: "POST",
      headers: headers,
      body: {
        name: form.value.name,
        username: form.value.username,
        email: form.value.email,
        roles: [form.value.roles],
        password: form.value.password,
      },
    });

    if (status.value !== "success") {
      toast.error(error.value.data.message, {
        autoClose: false,
      });

      return;
    }

    toast.success("Conta criada com sucesso!");
    setTimeout(() => {
      navigateTo("/app/users");
    }, 3500);
  }
};
</script>

<template>
  <layout-settings>
    <div class="relative w-full h-full">
      <layout-company v-show="!user.hasCompany">
        <span>
          Não é possível criar uma conta sem antes
          <nuxt-link
            to="/app/settings/company"
            class="text-white/70 font-medium border-white/60 border-b border-dashed transition hover:text-white/90"
          >
            criar a sua organização
          </nuxt-link>
        </span>
      </layout-company>
      <form
        @submit.prevent="onSubmit"
        class="w-full h-full flex justify-center items-center"
      >
        <div class="max-w-sm w-full flex flex-col gap-3">
          <ui-input
            :label="true"
            labelText="Nome completo"
            type="text"
            name="name"
            v-model="form.name"
            placeholder="Rex User"
            :disabled="!user.hasCompany"
            :onError="getError('name')"
          />
          <ui-input
            :label="true"
            labelText="Username"
            type="text"
            name="username"
            v-model="form.username"
            placeholder="Ursername"
            :disabled="!user.hasCompany"
            :onError="getError('username')"
          />
  
          <ui-input
            :label="true"
            labelText="E-mail"
            type="email"
            name="email"
            v-model="form.email"
            placeholder="E-mail"
            :disabled="!user.hasCompany"
            :onError="getError('email')"
          />
  
          <ui-input-select
            :label="true"
            labelText="Nível de acesso"
            name="roles"
            :options="['admin', 'analista', 'auditor']"
            v-model="form.roles"
            placeholder="Nível de acesso"
            :disabled="true"
            :onError="getError('roles')"
          />
  
          <ui-input
            :label="true"
            labelText="Senha"
            type="password"
            name="password"
            v-model="form.password"
            placeholder="**********"
            :disabled="!user.hasCompany"
            :onError="getError('password')"
          />
  
          <div>
            <button
              :disabled="!user.hasCompany"
              type="submit"
              class="w-full h-10 bg-green-800 default-rounded disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <!-- <Icon name="svg-spinners:ring-resize" /> -->
              <span v-show="true"> Criar conta </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  </layout-settings>
</template>
