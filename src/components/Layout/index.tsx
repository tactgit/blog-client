// node_modules
import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { useHistory, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// components
import Header from "../Header/index";
import Footer from "../Footer/index";

// consts
import { PATH } from "../../consts";

// style sheet
import "./assets/index.css";

const LayoutComponent: React.FC = (props) => {
    const location = useLocation();

    return (
        <>  { (location.pathname === PATH.SIGNIN || location.pathname === PATH.SIGNUP) ? 
            <Box
                w="100%"
                h="100%"
            >
                {props.children}
            </Box>  :
            <Box>
                <Header/>
                {props.children}
                <Footer/>
            </Box> 
            }     
        </>
    );
};

export default LayoutComponent;
