import { Flex, Button, Box, IconButton } from "@chakra-ui/react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { useNavigate } from "react-router-dom";
import ApplyModal from "./ApplyModal";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";

export default function MainNavBar() {
  const navPage = ["About", "Projects", "Jobs", "Transactions"];
  const navigate = useNavigate();
  const navRoutes = ["/about", "/projects", "/jobs", "/tractions"];
  let userName = "James";

  return (
    <Flex
      backgroundColor={"white"}
      width={"100%"}
      height={"8vh"}
      justifyContent="space-between"
      alignItems="center"
      padding="0 2rem"
    >
      {/* Desktop Navigation */}
      <Flex
        display={{ base: "none", md: "flex" }}
        gap="10px"
        marginLeft={"20vh"}
      >
        {navPage.map((page, idx) => (
          <Button
            key={page}
            color={"black"}
            backgroundColor={"transparent"}
            _hover={{ color: "gray" }}
            fontSize="20px"
            onClick={() => navigate(navRoutes[idx])}
          >
            {page}
          </Button>
        ))}
      </Flex>

      {/* Mobile Navigation (Hamburger Menu) */}
      <MenuRoot>
        <MenuTrigger>
          <IconButton display={{ base: "flex", md: "none" }}>
            <Bars3Icon></Bars3Icon>
          </IconButton>
        </MenuTrigger>
        <MenuContent>
          {navPage.map((page, idx) => (
            <MenuItem
              key={page}
              value={page}
              onClick={() => navigate(navRoutes[idx])}
            >
              {page}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>

      {/* User Section */}
      <Flex alignItems={"center"} gap="10px">
        <Button
          color={"black"}
          backgroundColor={"transparent"}
          _hover={{ color: "gray" }}
          fontSize="20px"
        >
          {userName}
        </Button>
        <Box width="1.5px" height="30px" backgroundColor="black" />
        <Button
          color={"black"}
          backgroundColor={"transparent"}
          _hover={{ color: "gray" }}
          fontSize="20px"
        >
          Logout
        </Button>
        <ApplyModal />
      </Flex>
    </Flex>
  );
}
