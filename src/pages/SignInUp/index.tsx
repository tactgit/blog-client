// node_modules
import React from "react";
import { Flex } from "@chakra-ui/react";
import { useHistory, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './iofrm.css';
import Logo from "./images/logo-light.svg";

// components

// consts
import { PATH } from "../../consts";

const SignInUpLayoutComponent: React.FC = (props) => {
    const location = useLocation();

    return (
        <>  
            <div className="form-body">
                <div className="row">
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items">
                                <div className="website-logo-inside">
                                    <a href="https://brandio.io/envato/iofrm/html/index.html">
                                        <div className="logo">
                                            <img className="logo-size" src={Logo} alt=""/>
                                        </div>
                                    </a>
                                </div>
                                <h3>Get more things done with Loggin platform.</h3>
                                <p>Access to the most powerfull tool in the entire design and web industry.</p>
                                <div className="page-links">
                                    <Link to={PATH.SIGNIN} className={location.pathname === PATH.SIGNIN ? "active" : ""}>Login</Link>
                                    <Link to={PATH.SIGNUP} className={location.pathname === PATH.SIGNUP ? "active" : ""}>Register</Link>
                                </div>
                                <Flex
                                    justify="center"
                                    align="center" 
                                    w="100%"
                                    h="100%"
                                >
                                    {props.children}
                                </Flex>
                                <div className="other-links">
                                    <span>Or login with</span><a href="https://brandio.io/envato/iofrm/html/login11.html#">Facebook</a><a href="https://brandio.io/envato/iofrm/html/login11.html#">Google</a><a href="https://brandio.io/envato/iofrm/html/login11.html#">Linkedin</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
        </>
    );
};

export default SignInUpLayoutComponent;
