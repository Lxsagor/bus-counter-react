import AdminRoutes from "./AdminRoutes";
import LandingRoute from "./LandingRoute";
import CounterRoute from "./CounterRoute";
import superAdminRoutes from "./superAdminRoutes";

const routes = [
    ...superAdminRoutes,
    ...AdminRoutes,
    ...CounterRoute,
    ...LandingRoute,
];

export default routes;
