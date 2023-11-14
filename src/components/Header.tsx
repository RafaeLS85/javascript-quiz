import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import { BsMoon, BsSun } from "react-icons/bs";
import JavascriptLogo from "../JavascriptLogo";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Container centerContent position="relative" margin={6}>
        <Flex justifyContent="space-between" >
          <Box position="absolute" left="0">
            <JavascriptLogo />
          </Box>
          <Box>
            <Heading>JavaScript Quiz</Heading>
          </Box>
          <Box position="absolute" right="0">
            <ButtonGroup
              onClick={toggleColorMode}
              cursor="pointer"
              marginTop={2}
            >
              {colorMode === "light" ? (
                <BsMoon size={30} />
              ) : (
                <BsSun size={30} />
              )}
            </ButtonGroup>
          </Box>
        </Flex>
      </Container>
    </>
  );
}
