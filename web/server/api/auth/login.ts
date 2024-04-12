export default defineEventHandler(async (event) => {
  const { baseURL } = useRuntimeConfig();
  const body = await readBody<{ email: string; password: string }>(event);

  $fetch(`${baseURL}/auth/login`, {
    method: "POST",
    body: body,
  })
    .then((r) => r.json().then((data) => ({ status: r.status, body: data })))
    .then((obj) => console.log(obj))
    .catch((err) => {
      console.log("ERRRO:::: " + err);
    });

  return 200;
});
