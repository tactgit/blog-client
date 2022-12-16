// node_modules
import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";

// components
import SignInUpLayoutComponent from "../SignInUp/index";
import SignUpFormComponent from "../../components/SignUp";

const SignUpPage = () => {
    const { colorMode } = useColorMode();

    return (
        <SignInUpLayoutComponent>
            <Box
                bg={colorMode === "light" ? "gray.200" : "gray.600"}
                w="350px"
                p={3}
                boxShadow="sm"
                rounded="lg"
            >
                <SignUpFormComponent />
            </Box>
        </SignInUpLayoutComponent>        
    );
};

export default SignUpPage;
