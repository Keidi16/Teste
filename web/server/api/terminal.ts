import shell from "shelljs";

export default defineEventHandler(async (event) => {
  const { command } = await readBody<{ command: string }>(event);

  const res = shell.exec(command);

  console.log(res.stdout);

  return res.stdout;
});
