import ProgressBar from "react-topbar-progress-indicator";
import LazyLoading from "../components/shared/Router/LazyLoading";
import { LandingUrl } from "../constants/urls";
import LandingLayout from "../layouts/LandingLayout";

const suspenseOption = {
  fallback: <ProgressBar />,
  layoutComponent: LandingLayout,
};

const LandingRoute = [
  {
    path: LandingUrl.landing.home,
    layout: LandingLayout,
    meta: { requiresAuth: false },
    component: LazyLoading(
      () => import("../pages/Landing/Home"),
      suspenseOption
    ),
  },
  {
    path: LandingUrl.landing.buses,
    layout: LandingLayout,
    meta: { requiresAuth: false },
    component: LazyLoading(
      () => import("../pages/Landing/Buses"),
      suspenseOption
    ),
  },
  {
    path: LandingUrl.landing.ticketpay,
    layout: LandingLayout,
    meta: { requiresAuth: false },
    component: LazyLoading(
      () => import("../pages/Landing/TicketPayment"),
      suspenseOption
    ),
  },
];
export default LandingRoute;
