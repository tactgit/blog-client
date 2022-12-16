import { ethers } from "ethers";
import ContractABI from "./abi.json";

const CounterContractAddress = "0x457e6638a5d519E2E600c900918B6fBf8555ca7f";

const getCounterContract = (providerOrSigner: ethers.Signer) => {
    return new ethers.Contract(
        CounterContractAddress,
        ContractABI,
        providerOrSigner
    );
};

export default getCounterContract;
