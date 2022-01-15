import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React, { useMemo } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import PublicRoute from "./components/shared/Router/PublicRoute";
import { SuperAdminUrl } from "./constants/urls";
import routes from "./routes";

const App = () => {
    const theme = useMemo(() => {
        return createTheme({
            typography: {
                fontFamily: ["Poppins"].join(","),
            },
            palette: {
                primary: {
                    main: "#33A551",
                },
            },
        });
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <CssBaseline />

                {/* <AppLayout> */}
                <Switch>
                    {/* <Route exact path="/">
                        <Redirect to={SuperAdminUrl.dashboard.index} />
                    </Route> */}
                    {routes.map((item, i) => (
                        <PublicRoute
                            key={i}
                            path={item.path}
                            exact
                            component={item.component}
                        />
                    ))}
                </Switch>
                {/* </AppLayout> */}
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
