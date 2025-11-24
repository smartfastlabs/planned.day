const baseUrl = "http://localhost:8080";

export default {
  routeRules: {
    "/api/**": {
      proxy: `${baseUrl}/**`,
      changeOrigin: true,
    },
  },
};
