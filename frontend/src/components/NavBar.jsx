import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Flex, Text, HStack, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FiPlusSquare } from "react-icons/fi";
import { IoSunnyOutline, IoMoon } from "react-icons/io5";

const NavBar = () => {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} p={4} >
        {/* Implement flex style component placement using Component from chakra-ui */}
        <Flex
            h={15}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base: "column",
                sm: "row"
            }}
        >
            <Text
                fontSize={{base: "22", sm: "28"}}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                bgGradient={"linear(to-r, cyan.400, blue.500)"}
                bgClip={"text"}
            >
                <Link to={"/"}>Product Store 🛒</Link>
            </Text>

            <HStack spacing={2} alignItems={"center"}>
                {/* Button to redirect to create page */}
                <Link to={"/create"}>
                    <Button>
                        <FiPlusSquare fontSize={20}/>
                    </Button>
                </Link>
                {/* Button to toggle dark and light mode */}
                <Button onClick={toggleColorMode}>
                    {colorMode == "light" ? <IoMoon /> : <IoSunnyOutline size='20' />}
                </Button>
            </HStack>

        </Flex>
    </Container>
  )
}

export default NavBar;
