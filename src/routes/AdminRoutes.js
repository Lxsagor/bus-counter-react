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
            () => import("../pages/Admin/Counter/Counters"),
            suspenseOption
        ),
    },
    {
        path: AdminUrl.manageCounter.edit,
        layout: AdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Admin/Counter/EditCounter"),
            suspenseOption
        ),
    },
    {
        path: AdminUrl.manageCounter.add,
        layout: AdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Admin/Counter/AddCounter"),
            suspenseOption
        ),
    },
    {
        path: AdminUrl.manageBus.index,
        layout: AdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Admin/Bus/ManageBus"),
            suspenseOption
        ),
    },
    {
        path: AdminUrl.manageBus.editbusinfo,
        layout: AdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Admin/Bus/EditBusInfo"),
            suspenseOption
        ),
    },
    {
        path: AdminUrl.manageBus.addbus,
        layout: AdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Admin/Bus/AddBus"),
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
        path: AdminUrl.manageSchedule.addSchedule,
        layout: AdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Admin/ManageSchedule/AddSchedule"),
            suspenseOption
        ),
    },
    {
        path: AdminUrl.manageSchedule.editSchedule,
        layout: AdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Admin/ManageSchedule/EditSchedule"),
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
        path: AdminUrl.staff.index,
        layout: AdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Admin/Staff/Staff"),
            suspenseOption
        ),
    },

    {
        path: AdminUrl.staff.addAdmin,
        layout: AdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Admin/Staff/Admin/AddAdmin"),
            suspenseOption
        ),
    },
    {
        path: AdminUrl.staff.addDriver,
        layout: AdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Admin/Staff/Driver/AddDriver"),
            suspenseOption
        ),
    },
    {
        path: AdminUrl.staff.driverDetails,
        layout: AdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Admin/Staff/Driver/DriverDetails"),
            suspenseOption
        ),
    },

    {
        path: AdminUrl.staff.addHelper,
        layout: AdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Admin/Staff/Helper/AddHelper"),
            suspenseOption
        ),
    },
    {
        path: AdminUrl.staff.helperDetails,
        layout: AdminLayout,
        meta: { requiresAuth: false },
        component: LazyLoading(
            () => import("../pages/Admin/Staff/Helper/HelperDetails"),
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
