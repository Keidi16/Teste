export const StatusCode = (code: number) => {
  if (code >= 200 && code < 300) {
    return "sucesso";
  } else if (code >= 400 && code < 500) {
    return "erro";
  } else if (code >= 500 && code < 600) {
    return "erro do servidor";
  } else {
    return "status desconhecido";
  }
};
