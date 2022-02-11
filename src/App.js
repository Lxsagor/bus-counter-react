import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import LoadingPage from "./components/shared/Router/LoadingPage";
import PublicRoute from "./components/shared/Router/PublicRoute";
import { LandingUrl } from "./constants/urls";
import routes from "./routes";
import { fetchMe } from "./store/actions/authActions";

const App = () => {
    const { loading } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
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

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            dispatch(fetchMe());
        }
    }, [dispatch]);

    // if (loading) {
    //     return <LoadingPage />;
    // }

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <CssBaseline />

                <Switch>
                    <Route exact path="/">
                        <Redirect to={LandingUrl.landing.home} />
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
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
