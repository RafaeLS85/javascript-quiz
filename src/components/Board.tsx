import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import { BsQuestionCircleFill } from "react-icons/bs";
// import { quiz } from "../data/quiz.json";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Question } from "../types";
import ExplainAnswer from "./Modals/ExplainAnswer";
import { useQuestionStore } from "../store/questions";
import ScoreModal from "./Modals/ScoreModal";
import confetti from "canvas-confetti";

const getBtnBgColor = (
  i: number,
  userSelected: number | undefined,
  correctAnswer: number
) => {
  if (userSelected === undefined) return "transparent";  
  if (i !== correctAnswer && i !== userSelected) return "transparent";  
  if (i === correctAnswer) return "green"; 
  if (i === userSelected) return "red";
  return "transparent";
};

interface Props {
  questions: Question[];
}

export default function Board({ questions }: Props) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const total = questions.length;
 
  const selectAnswer = useQuestionStore((state) => state.selectAnswer);
  const goPrevQuestion = useQuestionStore((state) => state.goPrevQuestion);
  const goNextQuestion = useQuestionStore((state) => state.goNextQuestion)
  const currentQuestion = useQuestionStore((state) => state.currentQuestion);

  const {
    question,
    code,
    answers,
    explanation,
    userSelected,
    isCorrect,
    id,
    correctAnswer,
  } = questions[currentQuestion];

  
  const handleClick = (answerIndex: number) => {
    const id = questions[currentQuestion].id;
    selectAnswer(id, answerIndex);
  };  

  return (
    <>   
      <Card minW="lg">
        <Box borderWidth="1px" p={5} borderRadius="lg">
          <Flex justifyContent="space-between" alignItems="center">
            <Button
              onClick={goPrevQuestion}
              isDisabled={currentQuestion === 0}
            >
              <BiLeftArrowAlt />
            </Button>
            <Text>
              {currentQuestion + 1} / {total}
            </Text>
            <Button
              onClick={goNextQuestion}
              isDisabled={currentQuestion >= questions.length - 1}
            >
              <BiRightArrowAlt />
            </Button>
          </Flex>
        </Box>

        <CardHeader>
          <Heading size="md">{question}</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <SyntaxHighlighter language="javascript" style={a11yDark}>
                {code}
              </SyntaxHighlighter>
            </Box>
            <Box padding={0.5}>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                marginBottom={5}
              >
                <Heading size="xs" textTransform="uppercase">
                  OPTIONS:
                </Heading>
                {/* {selected && (
                  <>
                    <BsQuestionCircleFill
                      size={20}
                      onClick={onOpen}
                      color="yellow"
                    />
                    <Button size='sm' variant='outline' colorScheme="yellow" onClick={() => nextPage(page + 1)}>Next</Button>
                  </>
                )} */}
              </Flex>

              {answers.map(
                (
                  opt,
                  i //
                ) => (
                  <Button
                    key={i}
                    width="100%"
                    borderRadius={2}
                    colorScheme="blue"
                    variant="outline"
                    onClick={() => handleClick(i)}
                    style={{
                      backgroundColor: getBtnBgColor(
                        i,
                        userSelected,
                        correctAnswer
                      ),
                    }}
                    isDisabled={userSelected !== undefined}
                  >
                    <Text noOfLines={1}>{opt}</Text>
                  </Button>
                )
              )}
            </Box>
            {/* <Box>
              <Heading size="xs" textTransform="uppercase">
                SCORE
              </Heading>
              <Text pt="2" fontSize="sm">
                See a detailed analysis of all your business clients.               
              </Text>
            </Box> */}
          </Stack>
        </CardBody>
      </Card>
      <ExplainAnswer explain={explanation} isOpen={isOpen} onClose={onClose} />
      {/* <ScoreModal /> */}
    </>
  );
}
