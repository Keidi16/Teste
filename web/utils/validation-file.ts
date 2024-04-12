type ContentType = "image/jpeg" | "image/png";

const MAX_SIZE = 1024 * 1024 * 3;

export function validationFile(file: File | undefined): true | string {
  const VALID_EXTENSIONS = ["png", "jpg", "jpeg", "webp"];

  const fileExtension = file?.name.split(".")[1];

  if (!VALID_EXTENSIONS.includes(fileExtension)) return "Arquivo inválido";

  if (file?.size as number > MAX_SIZE) return "Selecione uma foto menor que 4MB";

  return true;
}
