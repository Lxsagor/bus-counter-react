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
        component: LazyLoading(
            () => import("../pages/Auth/Login"),
            suspenseOption
        ),
    },
    {
        path: AuthUrl.auth.forget,
        layout: LandingLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Auth/Forget"),
            suspenseOption
        ),
    },
    {
        path: AuthUrl.auth.otpSend,
        layout: LandingLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Auth/OTPpage"),
            suspenseOption
        ),
    },
    {
        path: AuthUrl.auth.verify,
        layout: LandingLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Auth/Verify"),
            suspenseOption
        ),
    },
];
export default AuthRoute;
