import ProgressBar from "react-topbar-progress-indicator";
import LazyLoading from "../components/shared/Router/LazyLoading";
import { CounterUrl } from "../constants/urls";
import CounterLayout from "../layouts/CounterLayout";

const suspenseOption = {
    fallback: <ProgressBar />,
    layoutComponent: CounterLayout,
};

const CounterRoute = [
    {
        path: CounterUrl.dashboard.index,
        layout: CounterLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Counter/Dashboard/Dashboard"),
            suspenseOption
        ),
    },
    {
        path: CounterUrl.dashboard.searchHistory,
        layout: CounterLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Counter/Dashboard/SearchHistory.js"),
            suspenseOption
        ),
    },
    {
        path: CounterUrl.dashboard.search,
        layout: CounterLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Counter/Dashboard/Search"),
            suspenseOption
        ),
    },
    {
        path: CounterUrl.accounts.index,
        layout: CounterLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Counter/Accounts/Accounts"),
            suspenseOption
        ),
    },
    {
        path: CounterUrl.history.index,
        layout: CounterLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Counter/History/History"),
            suspenseOption
        ),
    },
    {
        path: CounterUrl.counters.index,
        layout: CounterLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Counter/Counters/Counters"),
            suspenseOption
        ),
    },
    {
        path: CounterUrl.trackbus.index,
        layout: CounterLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Counter/TrackBus/TrackBus"),
            suspenseOption
        ),
    },
];

export default CounterRoute;
