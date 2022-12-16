//node module
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Text, Button, Select, Flex } from "@chakra-ui/react";

//const
import { PATH } from "../../consts";

//store
import { RootState } from "../../store";

//component
import CategoryItem from "../../components/CatetoryItem";
import PaginationComponent from "../../components/pagination";

//slice
import { fetchCategories } from "../../store/category-slice";

import getBlogContract from "../../contracts/Blog";

//image
// import NewsImage from "./assets/malte-helmhold-_WNJlf2K4rM-unsplash.jpg";
// import StarImage from "./assets/iconmonstr-star-3.svg";

declare let window: any;

const CategoryPage = () => {
    const categories = useSelector(
        (state: RootState) => state.categories.categories
    );
    const count = useSelector((state: RootState) => state.categories.count);
    const dispatch = useDispatch();

    const [allPagesNumber, setAllPagesNumber] = useState(0);
    const [pageIndex, setPageIndex] = useState(1);
    const [itemCount, setItemCount] = useState(5);
    const [searchKeyword, setSearchKeyword] = useState("");
    const [sortField, setSortField] = useState("time");
    const [sortDirection, setSortDirection] = useState("desc");
    const [purchaseList, setPurchaseList] = useState<any>([]);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = getBlogContract(signer as ethers.Signer);
    const getPurchaseList = async () => {
        const tx = await contract.getBlogs();
        setPurchaseList(tx);
    };

    useEffect(() => {
        dispatch(
            fetchCategories(
                pageIndex,
                itemCount,
                searchKeyword,
                sortField,
                sortDirection
            )
        );
        getPurchaseList();
    }, [
        dispatch,
        pageIndex,
        itemCount,
        searchKeyword,
        sortField,
        sortDirection,
    ]);

    useEffect(() => {
        setAllPagesNumber(Math.ceil(count / itemCount));
    }, [count, itemCount]);
    return (
        <section className="category">
            <div className="container">
                <div className="title">
                    <small>categories</small>
                    <span>Politics</span>
                </div>
                <div className="search">
                    <div className="flex">
                        <Flex>
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                                className="item-count"
                                width={150}
                            >
                                <Text>Count:</Text>
                                <Select
                                    variant="outline"
                                    defaultValue={itemCount}
                                    onChange={(event) => {
                                        setItemCount(
                                            Number(event.target.value)
                                        );
                                    }}
                                >
                                    <option value={5}>5 </option>
                                    <option value={10}>10 </option>
                                    <option value={20}>20 </option>
                                </Select>
                            </Box>
                            &nbsp;&nbsp;
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                                className="item-sort"
                                width={220}
                            >
                                <Text width={200}>Sort Field:</Text>
                                <Select
                                    variant="outline"
                                    defaultValue={sortField}
                                    onChange={(event) => {
                                        setSortField(event.target.value);
                                    }}
                                >
                                    <option value={"time"}>Date</option>
                                    <option value={"likes"}>Like</option>
                                </Select>
                                <Button
                                    ml={2}
                                    onClick={(event) => {
                                        let direction = "";
                                        if (sortDirection == "asc")
                                            direction = "desc";
                                        else direction = "asc";
                                        setSortDirection(direction);
                                    }}
                                >
                                    {sortDirection}
                                </Button>
                            </Box>
                        </Flex>
                    </div>
                    <Link to={PATH.CATEGORYADD} className={"category-add-btn"}>
                        Add
                    </Link>
                    <input
                        onChange={(event) => {
                            setSearchKeyword(event.target.value);
                        }}
                        className="category-input"
                        name="category_search"
                        placeholder="Type keyword"
                    />
                </div>
                <ul>
                    {categories.length > 0 &&
                        categories.map((category) => (
                            <CategoryItem
                                key={category.id}
                                category={category}
                                ownerAddress={purchaseList[category.id] || ""}
                            />
                        ))}
                </ul>
                <PaginationComponent
                    allPagesNumber={allPagesNumber}
                    pageChange={(page: number = 1) => {
                        setPageIndex(page);
                    }}
                />
            </div>
        </section>
    );
};

export default CategoryPage;
