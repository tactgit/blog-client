// node_modules
import ReactDOM from "react-dom";
import * as React from "react";
import { Provider } from "react-redux";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { DAppProvider } from "@usedapp/core";

//custome
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./store/auth-context";
import store from "./store";

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <Provider store={store}>
                {/* <DAppProvider config={{}}> */}
                    <BrowserRouter>
                        <ChakraProvider theme={theme}>
                            <App />
                        </ChakraProvider>
                    </BrowserRouter>
                {/* </DAppProvider> */}
            </Provider>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
