import ProgressBar from "react-topbar-progress-indicator";
import LazyLoading from "../components/shared/Router/LazyLoading";
import { AdminUrl } from "../constants/urls";
import AdminLayout from "../layouts/AdminLayout";

const suspenseOption = {
    fallback: <ProgressBar />,
    layoutComponent: AdminLayout,
};

const AdminRoutes = [
    {
        path: AdminUrl.dashboard.index,
        layout: AdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Admin/Dashboard"),
            suspenseOption
        ),
    },
    {
        path: AdminUrl.manageCounter.index,
        layout: AdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Admin/ManageCounter/ManageCounter"),
            suspenseOption
        ),
    },
    {
        path: AdminUrl.manageCounter.edit,
        layout: AdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Admin/ManageCounter/ManageUserEditInfo"),
            suspenseOption
        ),
    },
    {
        path: AdminUrl.manageBus.index,
        layout: AdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Admin/ManageBus/ManageBus"),
            suspenseOption
        ),
    },
    {
        path: AdminUrl.manageBus.editbusinfo,
        layout: AdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Admin/ManageBus/EditBusInfo"),
            suspenseOption
        ),
    },
    {
        path: AdminUrl.manageBus.addbus,
        layout: AdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Admin/ManageBus/AddBus"),
            suspenseOption
        ),
    },
    {
        path: AdminUrl.manageSchedule.index,
        layout: AdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Admin/ManageSchedule/ManageSchedule"),
            suspenseOption
        ),
    },
    {
        path: AdminUrl.manageSchedule.editinfo,
        layout: AdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () =>
                import("../pages/Admin/ManageSchedule/ManageScheduleEditInfo"),
            suspenseOption
        ),
    },

    {
        path: AdminUrl.trackBus.index,
        layout: AdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Admin/TrackBus/TrackBus"),
            suspenseOption
        ),
    },
    {
        path: AdminUrl.accountHistory.index,
        layout: AdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Admin/AccountHistory/AccountHistory"),
            suspenseOption
        ),
    },
    {
        path: AdminUrl.customize.index,
        layout: AdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Admin/Customize/Customize"),
            suspenseOption
        ),
    },
];

export default AdminRoutes;
