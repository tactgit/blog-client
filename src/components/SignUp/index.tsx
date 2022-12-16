// node_modules
import React, { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import {
    InputGroup,
    Input,
    Stack,
    FormControl,
    Box,
    useColorMode,
    useToast,
} from "@chakra-ui/react";

// store
import AuthContext from "../../store/auth-context";

// models
import AuthenticatedUser from "../../models/AuthUser";
import ApiError from "../../models/ApiError";

// config
import { SERVER_API_URL } from "../../config";

// consts
import { PATH } from "../../consts";

const SignUpFormComponent = () => {
    const API_URL = process.env.REACT_APP_BLOG_API_URL || SERVER_API_URL;
    const { colorMode } = useColorMode();
    const authContext = useContext(AuthContext);
    const toast = useToast();
    const history = useHistory();
    const usernameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await fetch(`${API_URL}/auth/signup`, {
                method: "POST",
                body: JSON.stringify({
                    username: usernameRef.current.value,
                    email: emailRef.current.value,
                    password: passwordRef.current.value,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                const responseData: ApiError = await response.json();
                throw new Error(responseData.message || response.statusText);
            }
            const responseData: AuthenticatedUser = await response.json();
            const expirationTime = new Date(
                new Date().getTime() + responseData.expirationTime * 1000
            );
            authContext.signin(
                responseData.token,
                expirationTime.toISOString()
            );
            // history.push(PATH.HOME);
            toast({
                title: `Register Success`,
                status: "success",
                isClosable: true,
                duration: 3000,
            });
        } catch (error) {
            toast({
                title: `${error}`,
                status: "error",
                isClosable: true,
                duration: 3000,
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
                <FormControl isRequired>
                    <InputGroup>
                        <Input
                            type="text"
                            placeholder="Full name"
                            aria-label="Full name"
                            ref={usernameRef}
                            bg={colorMode === "light" ? "white" : "inherit"}
                        />
                    </InputGroup>
                </FormControl>
                <FormControl isRequired>
                    <InputGroup>
                        <Input
                            type="email"
                            placeholder="Email"
                            aria-label="Email"
                            ref={emailRef}
                            bg={colorMode === "light" ? "white" : "inherit"}
                        />
                    </InputGroup>
                </FormControl>
                <FormControl isRequired>
                    <InputGroup>
                        <Input
                            type="password"
                            placeholder="Password"
                            aria-label="Password"
                            ref={passwordRef}
                            bg={colorMode === "light" ? "white" : "inherit"}
                        />
                    </InputGroup>
                </FormControl>
                <Box textAlign="center">
                    <div className="form-button register">
                        <button id="submit" type="submit" className="ibtn">Register</button>
                    </div>
                </Box>
            </Stack>
        </form>
    );
};

export default SignUpFormComponent;
