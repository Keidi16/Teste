export function createHeader() {
  const token = authCookie.getToken();

  const headers = new Headers({
    authorization: `Bearer ${token}`,
  });

  return headers;
}