export const API_URL = "http://127.0.0.1:8000/api/v1/";

export const api_routes = {
    auth_login: API_URL + "auth/login",
    auth_logout: API_URL + "auth/logout",
    auth_forget: API_URL + "auth/forget",
    auth_resend: API_URL + "auth/resend",
    auth_confirm: API_URL + "auth/confirm",
    auth_changePass: API_URL + "auth/changePass",
    auth_me: API_URL + "auth/me",

    //file
    file: API_URL + "file-uploader",

    // SuperAdmin
    companies: {
        index: API_URL + "companies",
        show: API_URL + "companies/:id",
        searchCompany: API_URL + "company-search",
    },
    divisions: {
        index: API_URL + "divisions",
        show: API_URL + "divisions/:id",
    },
    districts: {
        index: API_URL + "divisions/:divisionId/districts",
        show: API_URL + "divisions/:divisionId/districts/:id",
        get: API_URL + "districts",
    },
    admins: {
        index: API_URL + "company/:id/users",
        show: API_URL + "company/:companyId/users/:id",
        suspend: API_URL + "company/:companyId/users/suspend/:id",
        searchAdmin: API_URL + "company/:companyId/user-search",
    },

    // Admin
    counters: {
        index: API_URL + "counters",
        get: API_URL + "counters-get",
        show: API_URL + "counters/:id",
        searchCounter: API_URL + "counters-search",
    },

    buses: {
        index: API_URL + "buses",
        get: API_URL + "buses-get",
        show: API_URL + "buses/:id",
        busgetByType: API_URL + "buses-by-type/:type",
    },

    schedules: {
        index: API_URL + "schedulesbuses",
        show: API_URL + "schedulesbuses/:id",
    },
    fares: {
        index: API_URL + "fares",
        show: API_URL + "fares/:id",
    },
    tracks: {
        index: API_URL + "tracks",
        show: API_URL + "tracks/:id",
    },
    drivers: {
        index: API_URL + "drivers",
        show: API_URL + "drivers/:id",
        get: API_URL + "drivers-get",
    },
    staffs: {
        index: API_URL + "staffs",
        show: API_URL + "staffs/:id",
        get: API_URL + "staffs-get",
    },

    //counter
    booking: {
        routes: API_URL + "counter/routes",
        searchRoute: API_URL + "counter/route-search",
        assignBus: API_URL + "counter/assignBus",
        ticketBooking: API_URL + "counter/ticketBooking",
        searchTicket: API_URL + "counter/ticket-search",
        cancelTicket: API_URL + "counter/cancel-ticket",
    },

    //busbd
    seat: {
        selectedSeat: API_URL + "create-seat",
        removedSeat: API_URL + "delete-seat",
    },

    //user

    ticket: {
        searchCoach: API_URL + "user/searchCoach",
    },
};

export const SuperAdminUrl = {
    dashboard: {
        index: "/superadmin/dashboard",
        show: "/superadmin/dashboard/profile/:id",
    },

    // profile: "/profile",

    manageCompany: {
        index: "/superadmin/manage",
        add: "/superadmin/manage/addcompany",
        view: "/superadmin/manage/:id/viewdetails",
        addAdmin: "/superadmin/manage/:id/addAdmin",
        viewAdmin: "/superadmin/manage/:companyId/admin/:id/viewdetails",
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
        index: "/admin/manage-counter",
        add: "/admin/manage-counter/add",
        edit: "/admin/manage-counter/edit/:id",
    },
    manageBus: {
        index: "/admin/manage-bus",
        editbusinfo: "/admin/manage-bus/edit-bus-info/:id",
        addbus: "/admin/manage-bus/add-bus",
    },
    manageBusLayout: {
        index: "/admin/bus-layout",
        addbuslayout: "/admin/bus-layout/add-bus-layout",
    },
    manageSchedule: {
        index: "/admin/manage-schedule",
        addSchedule: "/admin/manage-schedule/add-schedule",
        editSchedule: "/admin/manage-schedule/:id/edit-schedule",
    },
    manageTrack: {
        index: "/admin/manage-track",
        addTrack: "/admin/manage-track/add-track",
        editTrack: "/admin/manage-track/:id/edit-track",
    },
    manageFare: {
        index: "/admin/manage-fare",
        addFare: "/admin/manage-fare/add-fare",
        editFare: "/admin/manage-fare/:id/edit-fare",
    },
    trackBus: {
        index: "/admin/trackBus",
    },
    staff: {
        index: "/admin/staff",
        addAdmin: "/admin/staff/add-admin",
        addDriver: "/admin/staff/add-driver",
        editDriver: "/admin/staff/:id/edit-driver",
        driverDetails: "/admin/staff/:id/driver-details",
        addStaff: "/admin/staff/add-staff",
        staffDetails: "/admin/staff/:id/staff-details",
        editStaff: "/admin/staff/:id/edit-staff",
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
        searchHistory: "/counter/dashboard/search-history",
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
        home: "/home",
        buses: "/buses",
        ticketpay: "/ticketpay",
    },
    auth: {
        login: "/login",
    },
};
export const AuthUrl = {
    auth: {
        login: "/login",
        forget: "/forget",
        otpSend: "/otpSend",
        verify: "/verify",
    },
};
