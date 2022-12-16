import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import {
    InputGroup,
    Input,
    Textarea,
    Stack,
    FormControl,
    Box,
    useColorMode,
    useToast,
    Image
} from "@chakra-ui/react";

import { PATH } from "../../consts";

// store
import { RootState } from "../../store";
import { fetchCategory, getCategory } from "../../store/category-slice";

// models
import ApiError from "../../models/ApiError";

// config
import { SERVER_API_URL, BASE_SERVER_API_URL } from "../../config";
import Category from "../../models/Category";

const CategoryAddPage = () => {
    const API_URL = process.env.REACT_APP_BLOG_API_URL || SERVER_API_URL;
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    // let category = useSelector((state: RootState) => state.categories.category);
    const [category, setCategory] = useState<any>({id:"", userId:"", content:"",imageUrl:"",likes:0,time:"", title:""});
    const titleRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const contentRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
    const { colorMode } = useColorMode();
    const toast = useToast();
    const formData = new FormData();
    const paths = location.pathname.split('/');
    let id = paths[2];

    // const { id } = useParams<{ id: string }>();
    if ( id === undefined ) id = "0";

    const getData = async () => {
        const data = await getCategory(id);
        
        if (category === undefined || id === "0") {
            setCategory({
                id: "",
                userId: "",
                title: "",
                content: "",
                imageUrl: "",
                time: "",
                likes: 0,
            })
        } else {
            setCategory(data);
        }
    }

    useEffect(() => {
        getData();
    }, [id]);
    
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        let uploadedImageUrl = "";
        if ( formData.get("imgCollection") != null ) {
            const response = await fetch(`${API_URL}/upload/image`, {
                method: "POST",
                body: formData,
            });
    
            if (!response.ok) {
                const responseData: ApiError = await response.json();
                throw new Error(responseData.message || response.statusText);
            }
    
            const responseData: { imageUrls: string[]; message: string } =
                await response.json();
            uploadedImageUrl = responseData.imageUrls[0];
        }

        let serverUrl = "";
        if ( id == "0" ) serverUrl = `${API_URL}/categories/category`;
        else serverUrl = `${API_URL}/categories/category?id=${id}`;
        try {
            const response = await fetch(serverUrl, {
                method: "POST",
                body: JSON.stringify({
                    title: titleRef.current.value,
                    content: contentRef.current.value,
                    imageUrl: uploadedImageUrl,
                    time: Date.now().toString()
                }),
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                const responseData: ApiError = await response.json();
                throw new Error(responseData.message || response.statusText);
            }
            
            toast({
                title: `Category add success`,
                status: "success",
                isClosable: true,
                duration: 3000,
            });
            history.push(PATH.CATEGORY);
        } catch (error) {
            toast({
                title: `${error}`,
                status: "error",
                isClosable: true,
                duration: 3000,
            });
        }
    }

    const imageSelect = async (files: FileList) => {
        Array.from(files).map((file: File) => {
            formData.append("imgCollection", file);
            return file;
        });
    };

    return(
        <div className="container category-add">
            <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                    <FormControl isRequired>
                        <InputGroup>
                            <Input
                                type="text"
                                placeholder="Title"
                                aria-label="Title"
                                ref={titleRef}
                                bg={colorMode === "light" ? "white" : "inherit"}
                                defaultValue={category.title}
                            />
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <InputGroup>
                            <Textarea
                                placeholder="Type content"
                                aria-label="content"
                                bg={colorMode === "light" ? "white" : "inherit"}
                                resize={"none"}
                                ref={contentRef}
                                defaultValue={category.content}
                            />
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <InputGroup>
                            <Input
                                type="file"
                                placeholder="Choose file"
                                aria-label="file"
                                bg={colorMode === "light" ? "white" : "inherit"}
                                onChange={(event) => {
                                    imageSelect(
                                        event.target.files ? event.target.files : new FileList()
                                    );
                                }}
                            />
                        </InputGroup>
                        {category.imageUrl && (
                            <Image
                                width={"100%"}
                                height={"300px"}
                                src={`${BASE_SERVER_API_URL}/${category.imageUrl}`}
                            />
                        )}
                    </FormControl>
                    <Box textAlign="center">
                        <div className="form-button register">
                            <button id="submit" type="submit" className="ibtn">Save</button>
                        </div>
                    </Box>
                </Stack>
            </form>
        </div>
    )
}

export default CategoryAddPage;