import { Flex, Text, Stack, Box, Button, Card, Image } from "@chakra-ui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/16/solid";

export default function About() {
  const funders = [
    "matchPoint",
    "Artificial Emotion",
    "RawResume",
    "SeaSell",
    "Applyee",
    "Antoy",
  ];

  return (
    <Stack>
      <Flex
        flexDir={"column"}
        color={"white"}
        marginLeft={"5vh"}
        marginTop={"5vh"}
      >
        <Text textStyle={"7xl"} fontFamily={"'Open Sans', sans-serif"}>
          Devil Fund
        </Text>
        <Text fontFamily={"'Open Sans', sans-serif"} marginTop={"-10px"}>
          ©portalle, Inc
        </Text>
      </Flex>

      <Flex
        flexDir={"column"}
        width={"61vh"}
        marginLeft={"20vh"}
        marginTop={"8vh"}
      >
        <Flex gap={"10px"}>
          <Text textStyle={"5xl"}>Why</Text>
          <Text
            textStyle={"5xl"}
            color={"red"}
            fontFamily={"'Fira Sans Condensed', sans-serif"}
          >
            DEVIL FUND
          </Text>
        </Flex>
        <Text>
          Devil Fund supports startups/projects/experiments that successfully
          spot the vulnerability of modern products/services and act to destroy
          with new solutions, not patch, the old systems.
        </Text>

        <Box boxSize={"5vh"} marginLeft={"25vh"} marginTop={"3vh"}>
          <EllipsisHorizontalIcon></EllipsisHorizontalIcon>
        </Box>

        <Button
          fontSize={"16px"}
          backgroundColor={"#497497"}
          color={"white"}
          borderRadius={"10vh"}
          width={"20vh"}
          height={"5vh"}
          _hover={{ opacity: 0.8 }}
        >
          Apply to Devil
        </Button>

        <Flex gap={"5vh"} width={"120vh"} flexWrap={"wrap"} marginTop={"10vh"}>
          {funders.map((funder) => {
            return (
              <Card.Root borderRadius={"5vh"}>
                <Card.Body gap="2">
                  <Image
                    src="https://picsum.photos/200/300"
                    width={"30vh"}
                    height={"13vh"}
                  ></Image>
                </Card.Body>
                <Card.Footer justifyContent="center">{funder}</Card.Footer>
              </Card.Root>
            );
          })}
          <Card.Root borderRadius={"5vh"}>
            <Card.Body gap="2">
              <Text
                width={"30vh"}
                height={"13vh"}
                textAlign={"center"}
                fontSize={"60px"}
              >
                +
              </Text>
            </Card.Body>
          </Card.Root>
        </Flex>
      </Flex>
    </Stack>
  );
}
