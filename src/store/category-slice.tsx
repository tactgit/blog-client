// node_modules
import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";

// config
import { SERVER_API_URL } from "../config";

// model
import Category from "../models/Category";

const API_URL = SERVER_API_URL;

type categoriesState = {
    categories: Category[];
    category: Category;
    pageIndex: number;
    itemCount: number;
    searchKeyword: string;
    count: number;
    status: boolean[];
};

const initialState: categoriesState = {
    categories: [],
    category: {
        id: "",
        userId: "",
        title: "",
        content: "",
        imageUrl: "",
        time: "",
        likes: 0,
    },
    pageIndex: 1,
    itemCount: 5,
    searchKeyword: "",
    count: 0,
    status: [],
};

const categoriesSlice = createSlice({
    name: "category",
    initialState: initialState,
    reducers: {
        sendRequest(state: categoriesState) {
            state.status = [...state.status].concat([true]);
        },
        receiveRequest(state: categoriesState) {
            state.status = [...state.status].slice(1);
        },
        setCategories(state: categoriesState, action: PayloadAction<{ categories: Category[] }>) {
            state.categories = action.payload.categories;
        },
        setCategory(state: categoriesState, action: PayloadAction<{ category: Category }>) {
            state.category = action.payload.category;
        },
        setCount(state: categoriesState, action: PayloadAction<{ count: number }>) {
            state.count = action.payload.count;
        },
        setPageIndex(state: categoriesState, action: PayloadAction<{ pageIndex: number }>) {
            state.pageIndex = action.payload.pageIndex;
        },
        setItemCount(state: categoriesState, action: PayloadAction<{ itemCount: number }>) {
            state.itemCount = action.payload.itemCount;
        },
        setSearchKeyword(state: categoriesState, action: PayloadAction<{ searchKeyword: string }>) {
            state.searchKeyword = action.payload.searchKeyword;
        },
    },
})

const categoriesActions = categoriesSlice.actions;

export const fetchCategories = (
    pageIndex: number,
    itemCount: number,
    searchKeyword: string,
    sortField: string,
    sortDir: string
) => {
    return async (dispatch: Dispatch) => {
        dispatch(categoriesActions.sendRequest());
        try {
            const response = await fetch(
                `${API_URL}/categories/categories?pageIndex=${pageIndex}&itemCount=${itemCount}&searchKeyword=${searchKeyword}&sortField=${sortField}&sortDir=${sortDir}`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            
            const responseData: {
                categories: Category[];
                count: number;
                message: string;
            } = await response.json();
            if (!response.ok) {
                throw new Error(responseData.message || response.statusText);
            }
            const { categories, count } = responseData;
            dispatch(categoriesActions.setCategories({ categories }));
            dispatch(categoriesActions.setCount({ count }));

            //pagination info
            dispatch(categoriesActions.setPageIndex({ pageIndex }));
            dispatch(categoriesActions.setItemCount({ itemCount }));
            dispatch(categoriesActions.setSearchKeyword({ searchKeyword }));

            dispatch(categoriesActions.receiveRequest());
        }
        catch (error) {
            dispatch(categoriesActions.receiveRequest());
        }
    }
}

export const fetchCategory = (categoryId:string) => {
    return async (dispatch: Dispatch) => {
        dispatch(categoriesActions.sendRequest());
        try {
            const response = await fetch(
                `${API_URL}/categories/category/${categoryId}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            const responseData : {
                category: Category;
                // categories: Category[];
                message: string;
            } = await response.json();
            if ( !response.ok ) {
                throw new Error(responseData.message || response.statusText);
            }
            const { category } = responseData;
            dispatch(categoriesActions.setCategory({category}));
            dispatch(categoriesActions.receiveRequest());
        } catch (error) {
            dispatch(categoriesActions.receiveRequest());
        }
    }
}

export const getCategory = async (categoryId:string) => {
    try {
        const response = await fetch(
            `${API_URL}/categories/category/${categoryId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            }
        );
        const responseData : {
            category: Category;
            // categories: Category[];
            message: string;
        } = await response.json();
        if ( !response.ok ) {
            // throw new Error(responseData.message || response.statusText);
            return {}
        }
        const { category } = responseData;
        return category;
    } catch (error) {
        return {};
    }
}

export const fetchDeleteCategory = (categoryID:string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await fetch(
                `${API_URL}/categories/category/${categoryID}`, {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            const responseData: {
                message: string;
            } = await response.json();
            if (!response.ok) {
                throw new Error(responseData.message || response.statusText);
            }
            dispatch(categoriesActions.receiveRequest());
        } catch (error) {
            dispatch(categoriesActions.receiveRequest());
        }
    }
}

export const fetchVoteCategory = (categoryId: string, currentVote:number) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await fetch(`${API_URL}/categories/vote/${categoryId}?currentVote=${currentVote}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            });
            const responseData: {
                message: string;
            } = await response.json();
            if (!response.ok) {
                throw new Error(responseData.message || response.statusText);
            }
            dispatch(categoriesActions.receiveRequest());
        } catch (error) {
            dispatch(categoriesActions.receiveRequest());
        }
    };
};

export default categoriesSlice;