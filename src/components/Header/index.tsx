// node_modules
import React, { useContext } from "react";
import { useHistory, Link, useLocation } from "react-router-dom";

import {
    Flex,
    Box,
    Heading,
    Spacer,
    Button,
    Menu,
    MenuList,
    MenuButton,
    MenuItem,
    Image,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";

// store
import { RootState } from "../../store";
import { logout } from "../../store/me-slice";

// context
import AuthContext from "../../store/auth-context";

// config
import { BASE_SERVER_API_URL } from "../../config";

// consts
import { PATH } from "../../consts";

const HeaderComponent: React.FC = () => {
    const location = useLocation();
    const authContext = useContext(AuthContext);
    const dispatch = useDispatch();
    const history = useHistory();
    const me = useSelector((state: RootState) => state.me.me);

    const logoutHandler = () => {
        dispatch(logout());
        authContext.logout();
        history.push(PATH.HOME);
    };

    return (
        <header>
            <div className="container">
                <Link to={PATH.HOME} className={location.pathname === PATH.HOME ? "logo active" : "logo"}>Meranada</Link>
                <div className="menu">
                    <Link to={PATH.CATEGORY} className={location.pathname === PATH.CATEGORY ? "menu-item active" : "menu-item"}>Category</Link>
                    {authContext.isLoggedIn ? (
                        <Menu>
                            {({ isOpen }) => (
                                <>
                                    <MenuButton
                                        isActive={isOpen}
                                        as={Button}
                                        rightIcon={<ChevronDownIcon />}
                                        className="menu-btn menu-item"
                                    >
                                        {me.username}
                                    </MenuButton>
                                    <MenuList>
                                        <Link to={PATH.PROFILE}>
                                            <MenuItem>Profile</MenuItem>
                                        </Link>
                                        <MenuItem onClick={logoutHandler}>
                                            Logout
                                        </MenuItem>
                                    </MenuList>
                                </>
                            )}
                        </Menu>
                    ): 
                    (
                        <Link to={PATH.SIGNIN} className={location.pathname === PATH.SIGNIN ? "menu-item active" : "menu-item"}>Login</Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;
