import { Flex, Text, Button, Icon, HStack } from "@chakra-ui/react";
import { HiSquare3Stack3D } from "react-icons/hi2";

export default function MainNavBar() {
  return (
    <Flex flexDir={"column"}>
      <Flex
        justifyContent={"space-between"}
        padding={"1rem"}
        marginBottom={"-3px"}
      >
        <HStack fontSize={"18px"}>
          <Icon>
            <HiSquare3Stack3D></HiSquare3Stack3D>
          </Icon>
          <Text fontWeight={"bold"}>Orgnization</Text>
        </HStack>

        <HStack gap={"20px"}>
          <Button>placeholder</Button>
          <Button>placeholder</Button>
        </HStack>
      </Flex>
      <hr
        style={{
          backgroundColor: "#383838",
          height: "2px",
          width: "100%",
        }}
        class="solid"
      />
    </Flex>
  );
}
