//node modules
import dotenv from "dotenv";
import React, { useState, useEffect } from "react";
// import Web3 from "web3";
import { formatEther } from "@ethersproject/units";
import { ethers } from "ethers";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEthers, useEtherBalance } from "@usedapp/core";
// config
import { BASE_SERVER_API_URL } from "../../config";

// consts
import { PATH } from "../../consts";

//store
import { RootState } from "../../store";

//slice
import {
    fetchDeleteCategory,
    fetchCategories,
    fetchVoteCategory,
} from "../../store/category-slice";
import { setWalletAddress } from "../../store/me-slice";

//image
import StarImage from "./iconmonstr-star-3.svg";

// models
import Category from "../../models/Category";

//contract
import getBlogContract from "../../contracts/Blog";

// props type
type Props = {
    category: Category;
    ownerAddress: string;
};

dotenv.config();

declare let window: any;

const CategoryItem: React.FC<Props> = ({
    category,
    ownerAddress,
    ...props
}) => {
    const me = useSelector((state: RootState) => state.me.me);
    const walletAddress = useSelector(
        (state: RootState) => state.me.walletAddress
    );
    const [wallet, setWallet] = useState<string>("");
    const [purchaseList, setPurchaseList] = useState<any>([]);
    const pageIndex = useSelector(
        (state: RootState) => state.categories.pageIndex
    );
    const itemCount = useSelector(
        (state: RootState) => state.categories.itemCount
    );
    const searchKeyword = useSelector(
        (state: RootState) => state.categories.searchKeyword
    );
    const dispatch = useDispatch();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = getBlogContract(signer as ethers.Signer);
    const getPurchaseList = async () => {
        const tx = await contract.getBlogs();
        setPurchaseList(tx);
    };
    const getAcount = async () => {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        const account = accounts[0];
        setWallet(account);
    };
    getAcount();

    useEffect(() => {
        getPurchaseList();
    }, [wallet]);

    const onDeleteCategory = () => {
        dispatch(fetchDeleteCategory(category.id));
        dispatch(
            fetchCategories(pageIndex, itemCount, searchKeyword, "time", "desc")
        );
    };

    const onVote = () => {
        dispatch(fetchVoteCategory(category.id, category.likes));
        dispatch(
            fetchCategories(pageIndex, itemCount, searchKeyword, "time", "desc")
        );
    };

    const onPurchase = (blogId: number) => {
        const constractExecute = async () => {
            try {
                const tx = await contract.purchase(blogId);
                await tx.wait();
                getPurchaseList();
            } catch (err) {
                console.log(err);
            }
        };
        getAcount();
        constractExecute();
    };
    console.log("ddd");
    return (
        <li>
            <div className="content">
                <h5>{category.title}</h5>
                <p>{category.content}</p>
                <div className="info">
                    {" "}
                    {category.userId} <span className="color-gray">in</span>{" "}
                    Food
                </div>
                <small className="time color-gray">
                    {" "}
                    {category.time} <span className="fa fa-multi">.</span> 3 min
                    read{" "}
                    <span className="fa fa-star">
                        <img src={StarImage} />
                    </span>
                </small>
                <div className="buttons">
                    {wallet.toUpperCase() ===
                        String(purchaseList[category.id]).toUpperCase() && (
                        <div>
                            <Link to={`${PATH.CATEGORYADD}/${category.id}`}>
                                Edit
                            </Link>
                            <button onClick={onDeleteCategory}>Delete</button>
                        </div>
                    )}
                    {me.id !== category.userId && (
                        <div>
                            <button onClick={onVote}>vote</button>
                            <span className="vote">{category.likes}</span>
                        </div>
                    )}
                    {wallet.toUpperCase() !==
                        String(purchaseList[category.id]).toUpperCase() && (
                        <button
                            onClick={() =>
                                onPurchase(Number.parseInt(category.id))
                            }
                        >
                            Purchase
                        </button>
                    )}
                </div>
            </div>
            <div className="img">
                <img
                    src={`${BASE_SERVER_API_URL}/${category.imageUrl}`}
                    alt=""
                />
            </div>
        </li>
    );
};

export default CategoryItem;
