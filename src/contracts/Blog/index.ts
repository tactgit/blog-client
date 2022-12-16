// import dotenv from "dotenv";
import { ethers } from "ethers";
import ContractABI from "./abi.json";

// dotenv.config();

const BlogContractAddress = process.env.REACT_APP_BLOG_CONTRACT!;

const getBlogContract = (providerOrSigner: ethers.Signer) => {
    return new ethers.Contract(
        BlogContractAddress,
        ContractABI,
        providerOrSigner
    );
};

export default getBlogContract;
