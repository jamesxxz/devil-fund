import { Flex, Button, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ApplyModal from "./ApplyModal";
export default function MainNavBar() {
  const navPage = ["About", "Projects", "Jobs", "Transactions"];
  const navigate = useNavigate();
  const navRoutes = ["/about", "/projects", "/jobs", "/tractions"];
  let userName = "James";

  return (
    <Flex backgroundColor={"white"} height={"8vh"} gap={"20vh"}>
      <Flex gap={"10px"} padding={"0.5rem"} marginLeft={"40vh"}>
        {navPage.map((page, idx) => {
          return (
            <Button
              color={"black"}
              backgroundColor={"transparent"}
              _hover={{
                color: "gray",
              }}
              fontSize={"20px"}
              onClick={() => navigate(navRoutes[idx])}
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
          {userName}
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

        <ApplyModal></ApplyModal>
      </Flex>
    </Flex>
  );
}
