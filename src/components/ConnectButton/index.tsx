import React, {useState} from "react";
import { Button, Box, Text } from "@chakra-ui/react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import Identicon from "../../components/Identicon";
//smart contract module
import Web3 from "web3";
declare let window:any;

type Props = {
  handleOpenModal: any;
};

const ConnectButton = ({ handleOpenModal }: Props) =>  {
  // const { activateBrowserWallet, account } = useEthers();
  // const etherBalance = useEtherBalance(account);
  // const 
  // const web3 = new Web3(rpcURL)
  let account = '';
  
  // web3.eth.getAccounts(function(error, accounts) {
  //   if (error) {
  //     console.log(error);
  //   }
  //   account = accounts[0];
  //   console.log(accounts);
  // })
  
  // const account = '0xb9839d5Bc507c429e41CaF0960FCa3560A60AF7F' // Your account address goes here
  // let balance;
  const [balance, setBalance] = useState<string>("");
  // web3.eth.getBalance(account, (err, wei) => {
  //   const b = web3.utils.fromWei(wei, 'ether')
  //   setBalance(b);
  //   // console.log(balance);
  // })

  // const abi = require("../../contracts/blog.abi.json")
  // const address = "0x46FA13409939F513F7Fe67e9FbF641ddeC666e27";
  // const contract = new web3.eth.Contract(abi, address);
  // contract.methods.getBalance().call((err:string, result:string) => { console.log(result) });

  // const account1 = '0xCFDC706E498755E344DB19701BeB5d8E8493B734' // Your account address 1
  // const account2 = '0xb9839d5Bc507c429e41CaF0960FCa3560A60AF7F' // Your account address 2

  // const privateKey1 = Buffer.from('0857673a5bae4d34c6e17e0b568d1d9440ff30af0b889cd737be2cb8deee8a80', 'hex')
  // const privateKey2 = Buffer.from('YOUR_PRIVATE_KEY_2', 'hex')
  // const Tx = require('ethereumjs-tx');
  // web3.eth.getTransactionCount(account1, (err, txCount) => {
  //   // Build the transaction
  //   const txObject = {
  //     nonce:    web3.utils.toHex(txCount),
  //     to:       account2,
  //     value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
  //     gasLimit: web3.utils.toHex(21000),
  //     gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
  //   }

  //   // Sign the transaction
  //   const tx = new Tx(txObject)
  //   tx.sign(privateKey1)

  //   const serializedTx = tx.serialize()
  //   const raw = '0x' + serializedTx.toString('hex')

  //   // Broadcast the transaction
  //   web3.eth.sendSignedTransaction(raw, (err, txHash) => {
  //     console.log('txHash:', txHash)
  //     // Now go check etherscan to see the transaction!
  //   })
  // })

  const getAcount = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    console.log(account);
  }

  function handleConnectWallet() {
    // activateBrowserWallet();
    getAcount();
  }

  return account ? (
    <Box
      display="flex"
      alignItems="center"
      background="gray.700"
      borderRadius="xl"
      py="0"
    >
      <Box px="1">
        <Text color="white" fontSize="md">
          {balance && parseFloat(balance).toFixed(3)} ETH
        </Text>
      </Box>
      
    </Box>
  ) : (
    <Button
      onClick={handleConnectWallet}
      bg="blue.800"
      color="blue.300"
      fontSize="lg"
      fontWeight="medium"
      borderRadius="xl"
      border="1px solid transparent"
      _hover={{
        borderColor: "blue.700",
        color: "blue.400",
      }}
      _active={{
        backgroundColor: "blue.800",
        borderColor: "blue.700",
      }}
    >
      Connect to a wallet
    </Button>
  );
}

export default ConnectButton;