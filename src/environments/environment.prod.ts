export const environment = {
  production: true,
  productServiceBaseUrl: window["env"]["apiUrl"] || "default",
  debug: window["env"]["debug"] || false
};
