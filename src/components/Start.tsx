import { Button } from "@chakra-ui/react";
import { useQuestionStore } from "../store/questions";

export default function Start() {

    const LIMIT_QUESTIONS = 10; // env, settings, select by user..

    const fetchQuestions = useQuestionStore(state => state.fetchQuestions);
    const startGame = useQuestionStore((state) => state.startGame)

    const handleClick = () => {       
        fetchQuestions(LIMIT_QUESTIONS)
        startGame();
    }

    return (
        <Button colorScheme='green' onClick={handleClick}>Start!</Button>
    )
}