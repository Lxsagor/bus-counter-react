import AdminRoutes from "./AdminRoutes";
import superAdminRoutes from "./superAdminRoutes";

const routes = [...superAdminRoutes, ...AdminRoutes];

export default routes;
