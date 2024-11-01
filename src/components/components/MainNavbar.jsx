import { Flex, Text, Button, Icon, HStack, Box } from "@chakra-ui/react";

export default function MainNavBar() {
  const navPage = ["About", "Projects", "Jobs", "Transactions"];

  return (
    <Flex backgroundColor={"white"} height={"8vh"} gap={"20vh"}>
      <Flex gap={"10px"} padding={"0.5rem"} marginLeft={"40vh"}>
        {navPage.map((page) => {
          return (
            <Button
              color={"black"}
              backgroundColor={"transparent"}
              _hover={{
                color: "gray",
              }}
              fontSize={"20px"}
            >
              {page}
            </Button>
          );
        })}
      </Flex>

      <Flex padding={"0.5rem"} alignItems={"center"}>
        <Button
          color={"black"}
          backgroundColor={"transparent"}
          _hover={{
            color: "gray",
          }}
          fontSize={"20px"}
        >
          James
        </Button>
        <Box
          width="1.5px"
          height="30px"
          backgroundColor={"black"}
          marginTop={"1vh"}
        />
        <Button
          color={"black"}
          backgroundColor={"transparent"}
          _hover={{
            color: "gray",
          }}
          fontSize={"20px"}
        >
          Logout
        </Button>
        <Button
          fontSize={"20px"}
          backgroundColor={"#497497"}
          color={"white"}
          marginLeft={"3vh"}
          borderRadius={"10vh"}
          width={"17vh"}
          height={"5vh"}
          opacity={"0.8"}
          _hover={{ opacity: 1.0 }}
        >
          Apply
        </Button>
      </Flex>
    </Flex>
  );
}
