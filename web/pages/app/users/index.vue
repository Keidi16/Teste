<script setup lang="ts">
definePageMeta({
  title: "Utilizadores",
  middleware: "auth-routes",
});

const USERS = ref({});

const { baseURL } = useRuntimeConfig().public;

const { data } = await useFetch(`${baseURL}/users`, {
  headers: createHeader(),
});

USERS.value = data.value;

const nextRequest = async () => {
  let page = USERS.value.meta.currentPage;

  page = Number(page) + 1;

  const { data } = await useFetch(
    `http://localhost:4000/api/v1/logs/requests?page=${page}`,
    {
      headers: createHeader(),
    }
  );
  USERS.value = data?.value;
};

const prevRequest = async () => {
  const page = USERS.value.meta.currentPage - 1;

  const { data } = await useFetch(
    `http://localhost:4000/api/v1/logs/requests?page=${page}`,
    {
      headers: createHeader(),
    }
  );
  USERS.value = data.value;
};
</script>

<template>
  <section
    class="w-full h-full overflow-y-auto scrollbar-inbox"
  >
   <ui-table :users="USERS" :next="nextRequest" :prev="prevRequest" />
  </section>
</template>