import { Button, Container, Flex, Text } from "@chakra-ui/react";
import { useQuestionBoard } from "../hooks/useQuestionBoard";
import { useQuestionStore } from "../store/questions";

export default function Footer(){
    const { correct, incorrect, unanswer } = useQuestionBoard();

    const reset = useQuestionStore((state) => state.reset )
    
    return(
        <Container maxWidth="100%" border="">
            <footer style={{ marginTop: "1rem" }}>
                <Flex  justifyContent="center"  gap={8} alignItems="center">
                    <Text>{`${correct} ✅ correct`}</Text>
                    <Text>{`${incorrect} ❌ incorrect`}</Text>
                    <Text>{`${unanswer} not yet answered`}</Text>                
                </Flex>

                 <Flex justifyContent="center" marginTop="1rem">
                    <Button onClick={reset}>Restart Game</Button>
                </Flex>   
            </footer>
        </Container>
    )
}