import ProgressBar from "react-topbar-progress-indicator";
import LazyLoading from "../components/shared/Router/LazyLoading";
import { AuthUrl } from "../constants/urls";
import LandingLayout from "../layouts/LandingLayout";

const suspenseOption = {
  fallback: <ProgressBar />,
  layoutComponent: LandingLayout,
};

const AuthRoute = [
  {
    path: AuthUrl.auth.login,
    layout: LandingLayout,
    meta: { requiresAuth: false },
    component: LazyLoading(() => import("../pages/Auth/Login"), suspenseOption),
  },
];
export default AuthRoute;
