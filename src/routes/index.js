import AdminRoutes from "./AdminRoutes";
import LandingRoute from "./LandingRoute";
import CounterRoute from "./CounterRoute";
import superAdminRoutes from "./superAdminRoutes";
import AuthRoute from "./AuthRoute";

const routes = [
  ...superAdminRoutes,
  ...AdminRoutes,
  ...CounterRoute,
  ...LandingRoute,
  ...AuthRoute,
];

export default routes;
