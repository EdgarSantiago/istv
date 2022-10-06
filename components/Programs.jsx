import {
  Box,
  chakra,
  Image,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  useClipboard,
  useColorModeValue,
  VStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";

export default function Programs() {
  const { hasCopied, onCopy } = useClipboard("example@example.com");
  return (
    <Flex align="center" justify="center" id="contact">
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        <Box>
          <VStack spacing={{ base: 4, md: 8 }}>
            <Heading
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
            >
              Programação
            </Heading>
            <Flex position={"sticky"} top="100px">
              <Menu>
                <MenuButton bg="blue.500" as={Button} px="10px" ml="5px">
                  Dia
                </MenuButton>
                <MenuList>
                  <MenuItem>Segunda</MenuItem>
                  <MenuItem>Terça</MenuItem>
                  <MenuItem>Quarta</MenuItem>
                  <MenuItem>Quinta</MenuItem>
                  <MenuItem>Sexta</MenuItem>
                  <MenuItem>Sabádo</MenuItem>
                  <MenuItem>Domingo</MenuItem>
                </MenuList>
              </Menu>

              <Menu>
                <MenuButton bg="blue.500" as={Button} px="10px" ml="5px">
                  Cidade
                </MenuButton>
                <MenuList>
                  <MenuItem>Segunda</MenuItem>
                  <MenuItem>Terça</MenuItem>
                  <MenuItem>Quarta</MenuItem>
                  <MenuItem>Quinta</MenuItem>
                  <MenuItem>Sexta</MenuItem>
                  <MenuItem>Sabádo</MenuItem>
                  <MenuItem>Domingo</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            <SimpleGrid columns={[1, 5]} spacing={3}>
              {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => (
                <Card />
              ))}
            </SimpleGrid>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}

export function Card() {
  return (
    <Box w={["100%", "220px"]} shadow="lg" rounded="lg" overflow="hidden">
      <Image
        w="full"
        h={"150px"}
        fit="cover"
        src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="avatar"
      />

      <Box py={2} textAlign="center">
        <Link
          display="block"
          fontSize="lg"
          color="gray.800"
          _dark={{
            color: "white",
          }}
          fontWeight="bold"
        >
          Teste
        </Link>
      </Box>
    </Box>
  );
}
