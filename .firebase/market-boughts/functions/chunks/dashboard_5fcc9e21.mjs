export { renderers } from "../renderers.mjs";
export { onRequest } from "../_empty-middleware.mjs";

const page = () => import("./pages/dashboard_50d2d43b.mjs").then((n) => n.d);

export { page };
