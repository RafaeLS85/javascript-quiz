import { Button, Container, Flex, Text } from "@chakra-ui/react";
import { useQuestionBoard } from "../hooks/useQuestionBoard";
import { useQuestionStore } from "../store/questions";
import { TbReload } from "react-icons/tb";

export default function Footer() {
  const { correct, incorrect, unanswer } = useQuestionBoard();

  const reset = useQuestionStore((state) => state.reset);

  return (
    <Container maxWidth="100%" border="">
      <footer style={{ marginTop: "1rem" }}>
        <Flex justifyContent="center" gap={8} alignItems="center">
          <Text>{`✅ ${correct} Correct`}</Text>
          <Text>{`❌ ${incorrect} Incorrect`}</Text>
          <Text>{`❓ ${unanswer} Not yet answered`}</Text>
        </Flex>

        <Flex justifyContent="center" marginTop="1rem">
          <Button leftIcon={<TbReload />} onClick={reset}>
            Restart game
          </Button>
        </Flex>
      </footer>
    </Container>
  );
}
