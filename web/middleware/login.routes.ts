import type { User } from "@types";

import { useMainStore } from "@stores/app.main";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { authUser, storeUser } = useMainStore();
  const token = authCookie.getToken();

  if (token) {
    const user = authUser();

    if (!user.value) {
      const { data, status } = await useMyFetch<User>('auth/user-logged', {
        method: "GET",
      }) 

      if (status.value !== "success") {
        authCookie.deleteToken();
        return reloadNuxtApp();
      }

      storeUser(data.value);
      return navigateTo('/app')
    }

    return navigateTo("/app");
  }

  return;
});
