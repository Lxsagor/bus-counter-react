import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React, { useMemo } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PublicRoute from "./components/shared/Router/PublicRoute";
import AppLayout from "./layouts/AppLayout";
import routes from "./routes";
import { SiteUrl } from "./constants/urls";

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
                    <Route exact path="/">
                        <Redirect to={SiteUrl.dashboard.index} />
                    </Route>
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
