// node_modules
import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";

// config
import { SERVER_API_URL } from "../config";

// model
import User from "../models/User";
import AuthenticatedUser from "../models/AuthUser";
import ApiError from "../models/ApiError";

const API_URL = SERVER_API_URL;

type meState = {
    me: User;
    status: string;
    walletAddress: string;
};

const initialState: meState = {
    me: {
        id: "",
        username: "",
        email: "",
        password: "",
    },
    status: "completed",
    walletAddress: "",
};

const meSlice = createSlice({
    name: "me",
    initialState: initialState,
    reducers: {
        meRequest(state: meState) {
            state.me = {
                id: "",
                username: "",
                email: "",
                password: "",
            };
            state.status = "pending";
        },
        setMe(state: meState, action: PayloadAction<{ user: User }>) {
            state.me = action.payload.user;
            state.status = "completed";
        },
        requestFailure(state: meState) {
            state.status = "completed";
        },
        logout: (state: meState) => {},
        setWalletAddress(
            state: meState,
            action: PayloadAction<{ walletAddress: string }>
        ) {
            state.walletAddress = action.payload.walletAddress;
        },
    },
});

const userActions = meSlice.actions;

export const { setMe, logout } = userActions;

export const fetchMe = (token: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(userActions.meRequest());
        try {
            const response = await fetch(`${API_URL}/users/me`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            const responseData: {
                user: User;
                message: string;
            } = await response.json();
            if (!response.ok) {
                throw new Error(responseData.message || response.statusText);
            }
            const { user } = responseData;
            dispatch(userActions.setMe({ user }));
        } catch (error) {
            dispatch(userActions.requestFailure());
        }
    };
};

export const setWalletAddress = (walletAddress: string) => {
    return (dispatch: Dispatch) => {
        dispatch(userActions.setWalletAddress({ walletAddress }));
    };
};

export default meSlice;
