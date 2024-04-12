import type { User } from "~/types/user";

export const useMainStore = defineStore("main", () => {
  const user = ref<User | null>(null);

  function authUser() {
    return user;
  }
  function storeUser(data: User) {
    user.value = data;
  }
  function logout() {
    user.value = null;
  }

  return { authUser, storeUser, logout };
});
