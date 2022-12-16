// node_modules
import React, { useContext, useEffect } from "react";
import {
    Route,
    Switch,
    useHistory,
    useLocation,
    Redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";

// pages
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import HomePage from "./pages/Home";
import CategoryPage from "./pages/Category";
import CategoryAddPage from "./pages/CategoryAdd";
import ProfilePage from "./pages/Profile";

// components
import LayoutComponent from "./components/Layout";

// store
import { fetchMe } from "./store/me-slice";

// contexts
import AuthContext from "./store/auth-context";

// consts
import { PATH } from "./consts";

// console.log("hello");

const App = () => {
    const authContext = useContext(AuthContext);
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    if (
        location.pathname !== PATH.HOME &&
        location.pathname !== PATH.SIGNIN &&
        location.pathname !== PATH.SIGNUP &&
        !authContext.isLoggedIn
    ) {
        history.push(PATH.SIGNIN);
    }

    useEffect(() => {
        if (authContext.token) {
            dispatch(fetchMe(authContext.token));
        }
    }, [dispatch, authContext.token]);

    return (
        <LayoutComponent>
            {!authContext.isLoggedIn && (
                <Switch>
                    <Route path={PATH.HOME} exact>
                        <HomePage />
                    </Route>
                    <Route path={PATH.SIGNIN}>
                        <SignInPage />
                    </Route>
                    <Route path={PATH.SIGNUP}>
                        <SignUpPage />
                    </Route>                    
                    <Redirect from={"*"} to={PATH.HOME} />
                </Switch>
            )}
            {authContext.isLoggedIn && (
                <Switch>
                    <Route path={PATH.HOME} exact>
                        <HomePage />
                    </Route>
                    <Route path={PATH.CATEGORY}>
                        <CategoryPage />
                    </Route>
                    <Route path={PATH.CATEGORYADD}>
                        <CategoryAddPage />
                    </Route>
                    <Route path={`${PATH.CATEGORYADD}/:id`}>
                        <CategoryAddPage />
                    </Route>
                    <Route path={PATH.PROFILE}>
                        <ProfilePage />
                    </Route>
                    <Redirect from={"*"} to={PATH.HOME} />
                </Switch>
            )}
        </LayoutComponent>
    );
};

export default App;

// for co-author
