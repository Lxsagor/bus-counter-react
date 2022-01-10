import ProgressBar from "react-topbar-progress-indicator";
import LazyLoading from "../components/shared/Router/LazyLoading";
import { SiteUrl } from "../constants/urls";
import AppLayout from "../layouts/AppLayout";

const suspenseOption = {
    fallback: <ProgressBar />,
    layoutComponent: AppLayout,
};

const routes = [
    {
        path: SiteUrl.dashboard.index,
        layout: AppLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Dashboard"),
            suspenseOption
        ),
    },
    {
        path: SiteUrl.dashboard.show,
        layout: AppLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Dashboard/ViewProfile"),
            suspenseOption
        ),
    },
    {
        path: SiteUrl.manageCompany.index,
        layout: AppLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(() => import("../pages/Manage"), suspenseOption),
    },

    {
        path: SiteUrl.manageCompany.add,
        layout: AppLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Manage/AddCompany"),
            suspenseOption
        ),
    },
    {
        path: SiteUrl.manageCompany.view,
        layout: AppLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Manage/ViewDetails"),
            suspenseOption
        ),
    },
    {
        path: SiteUrl.manageCompany.more,
        layout: AppLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Manage/MoreDetails"),
            suspenseOption
        ),
    },
    {
        path: SiteUrl.contact.index,
        layout: AppLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Contact"),
            suspenseOption
        ),
    },
    {
        path: SiteUrl.contact.view,
        layout: AppLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Contact/ViewDetails"),
            suspenseOption
        ),
    },
    {
        path: SiteUrl.logs.index,
        layout: AppLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(() => import("../pages/Logs"), suspenseOption),
    },
    {
        path: SiteUrl.subscription.index,
        layout: AppLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Subscription"),
            suspenseOption
        ),
    },
    {
        path: SiteUrl.settings,
        layout: AppLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Settings"),
            suspenseOption
        ),
    },
];

export default routes;
