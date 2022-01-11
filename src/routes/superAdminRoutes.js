import ProgressBar from "react-topbar-progress-indicator";
import LazyLoading from "../components/shared/Router/LazyLoading";
import { SuperAdminUrl } from "../constants/urls";
import SuperAdminLayout from "../layouts/SuperAdminLayout";

const suspenseOption = {
    fallback: <ProgressBar />,
    layoutComponent: SuperAdminLayout,
};

const superAdminRoutes = [
    {
        path: SuperAdminUrl.dashboard.index,
        layout: SuperAdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/SuperAdmin/Dashboard"),
            suspenseOption
        ),
    },
    {
        path: SuperAdminUrl.dashboard.show,
        layout: SuperAdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/SuperAdmin/Dashboard/ViewProfile"),
            suspenseOption
        ),
    },
    {
        path: SuperAdminUrl.manageCompany.index,
        layout: SuperAdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/SuperAdmin/Manage"),
            suspenseOption
        ),
    },

    {
        path: SuperAdminUrl.manageCompany.add,
        layout: SuperAdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/SuperAdmin/Manage/AddCompany"),
            suspenseOption
        ),
    },
    {
        path: SuperAdminUrl.manageCompany.view,
        layout: SuperAdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/SuperAdmin/Manage/ViewDetails"),
            suspenseOption
        ),
    },
    {
        path: SuperAdminUrl.manageCompany.more,
        layout: SuperAdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/SuperAdmin/Manage/MoreDetails"),
            suspenseOption
        ),
    },
    {
        path: SuperAdminUrl.contact.index,
        layout: SuperAdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/SuperAdmin/Contact"),
            suspenseOption
        ),
    },
    {
        path: SuperAdminUrl.contact.view,
        layout: SuperAdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/SuperAdmin/Contact/ViewDetails"),
            suspenseOption
        ),
    },
    {
        path: SuperAdminUrl.logs.index,
        layout: SuperAdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/SuperAdmin/Logs"),
            suspenseOption
        ),
    },
    {
        path: SuperAdminUrl.subscription.index,
        layout: SuperAdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/SuperAdmin/Subscription"),
            suspenseOption
        ),
    },
    {
        path: SuperAdminUrl.settings,
        layout: SuperAdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/SuperAdmin/Settings"),
            suspenseOption
        ),
    },
];

export default superAdminRoutes;
