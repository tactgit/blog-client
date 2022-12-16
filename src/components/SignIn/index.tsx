// node_modules
import React, { useRef, useContext } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    InputGroup,
    Input,
    FormControl,
    useColorMode,
    useToast,
} from "@chakra-ui/react";

// store
// import { fetchSigninGoogle } from "../../store/me-slice";

// context
import AuthContext from "../../store/auth-context";

// models
import AuthenticatedUser from "../../models/AuthUser";
import ApiError from "../../models/ApiError";

// config
import { SERVER_API_URL } from "../../config";

// consts
import { PATH } from "../../consts";

const SignInFormComponent = () => {
    const API_URL = process.env.REACT_APP_BLOG_API_URL || SERVER_API_URL;
    const clientConfig = {
        client_id: `958035201784-f1otga6aorensm9hqh06abs5fc7nm8v1.apps.googleusercontent.com`,
    };

    const authContext = useContext(AuthContext);

    const toast = useToast();
    const { colorMode } = useColorMode();

    const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await fetch(`${API_URL}/auth/signin`, {
                method: "POST",
                body: JSON.stringify({
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
                title: `Login success`,
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
            <FormControl isRequired>
                <InputGroup>
                    <Input
                        type="email"
                        placeholder="E-mail Address"
                        aria-label="Email"
                        bg={colorMode === "light" ? "white" : "inherit"}
                        ref={emailRef}
                    />
                </InputGroup>
            </FormControl>
            <FormControl isRequired>
                <InputGroup>
                    <Input
                        type="password"
                        placeholder="Password"
                        aria-label="Password"
                        bg={colorMode === "light" ? "white" : "inherit"}
                        ref={passwordRef}
                    />
                </InputGroup>
            </FormControl>
            <div className="form-button">
                <button id="submit" type="submit" className="ibtn">Login</button> <a href="https://brandio.io/envato/iofrm/html/forget11.html">Forget password?</a>
            </div>
        </form>
    );
};

export default SignInFormComponent;
