// node_modules
import React, { useState, useCallback } from "react";
import {
    Box,
    useColorMode,
    useDisclosure,
    Divider,
    Flex,
    Button,
    InputGroup,
    Input,
    FormControl,
    FormLabel,
    ButtonGroup,
} from "@chakra-ui/react";
import { ethers } from "ethers";

//Component
import ConnectButton from "../../components/ConnectButton";
import AccountModal from "../../components/AccountModal";
import getCounterContract from "../../contracts/Counter";

declare let window: any;

const ProfilePage = () => {
    const { colorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [value, setValue] = useState<number>(0);

    const onValueChange = (event: any) => {
        setValue(event.target.value);
    };

    const onAddButtonClicked = useCallback(async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const contract = getCounterContract(signer as ethers.Signer);

        try {
            await contract.add(value);
        } catch (err) {
            console.log(err);
        }
    }, [value]);

    return (
        <Box
            bg={colorMode === "light" ? "gray.200" : "gray.600"}
            w="350px"
            p={3}
            boxShadow="sm"
            rounded="lg"
        >
            <ConnectButton handleOpenModal={onOpen} />
            {/* <AccountModal isOpen={isOpen} onClose={onClose} /> */}
            <Divider />
            <Flex alignContent={"center"} alignItems={"center"} mt={4}>
                <Box>
                    <FormLabel>Amount:</FormLabel>
                    <FormControl isRequired>
                        <InputGroup>
                            <Input
                                type="text"
                                placeholder="Password"
                                aria-label="Password"
                                bg={colorMode === "light" ? "white" : "inherit"}
                                value={value}
                                onChange={onValueChange}
                            />
                        </InputGroup>
                    </FormControl>
                    <ButtonGroup mt={3}>
                        <Button onClick={onAddButtonClicked} mr={2}>
                            add
                        </Button>
                        <Button mr={2}>del</Button>
                        <Button mr={2}>mul</Button>
                        <Button mr={2}>div</Button>
                    </ButtonGroup>
                </Box>
            </Flex>
        </Box>
    );
};

export default ProfilePage;
