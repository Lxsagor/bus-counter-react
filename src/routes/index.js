import AdminRoutes from "./AdminRoutes";
import CounterRoute from "./CounterRoute";
import superAdminRoutes from "./superAdminRoutes";

const routes = [...superAdminRoutes, ...AdminRoutes, ...CounterRoute];

export default routes;
