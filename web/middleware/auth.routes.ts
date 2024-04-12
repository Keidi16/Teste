import type { User } from "~/types";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { storeUser, authUser } = useMainStore();
  const token = authCookie.getToken();
  const user = authUser();

  if (token) {
    const { data, status } = await useMyFetch<User>("auth/user-logged", {
      method: "GET",
    });

    if (status.value !== "success") {
      authCookie.deleteToken();

      return navigateTo("/auth/login", { replace: true });
    }

    if (!user.value) storeUser(data.value);
  } else {
    authCookie.deleteToken();

    return navigateTo("/auth/login", { replace: true });
  }

  return;
});
