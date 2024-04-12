import axios from "axios";

const { baseURL } = useRuntimeConfig();

export const $axios = axios.create({
  baseURL: baseURL,
});
