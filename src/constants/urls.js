export const SuperAdminUrl = {
    dashboard: {
        index: "/superadmin/dashboard",
        show: "/superadmin/dashboard/profile/:id",
    },

    // profile: "/profile",

    manageCompany: {
        index: "/superadmin/manage",
        add: "/superadmin/manage/addcompany",
        view: "/superadmin/manage/viewdetails",
        more: "/superadmin/manage/moredetails",
    },
    contact: {
        index: "/superadmin/contact",
        view: "/superadmin/contact/viewdetails/:id",
    },
    logs: {
        index: "/superadmin/logs",
    },
    subscription: {
        index: "/superadmin/subscription",
    },

    settings: "/superadmin/settings",
};
export const AdminUrl = {
    dashboard: {
        index: "/admin/dashboard",
    },
    manageCounter: {
        index: "/admin/manageCounter",
        add: "/admin/manageCounter/add",
        edit: "/admin/manageCounter/edit/:id",
    },
    manageBus: {
        index: "/admin/manageBus",
        editbusinfo: "/admin/manageBus/editbusinfo",
        addbus: "/admin/manageBus/addbus",
    },
    manageSchedule: {
        index: "/admin/manageSchedule",
        editinfo: "/admin/manageSchedule/editinfo",
    },
    trackBus: {
        index: "/admin/trackBus",
    },
    accountHistory: {
        index: "/admin/accountHistory",
    },
    customize: {
        index: "/admin/customize",
    },
};
export const CounterUrl = {
    dashboard: {
        index: "/counter/dashboard",
        search: "/counter/dashboard/search",
    },
    accounts: {
        index: "/counter/accounts",
    },
    history: {
        index: "/counter/history",
    },
    counters: {
        index: "/counter/counters",
    },
    trackbus: {
        index: "/counter/trackbus",
    },
};
export const LandingUrl = {
    landing: {
        home: "/",
        buses: "/buses",
        ticketpay: "/ticketpay",
    },
};
