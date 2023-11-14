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
import { useEffect, useState } from "react";
import { Question } from "../types";
import ExplainAnswer from "./ExplainAnswer";
import { useQuestionStore } from "../store/questions";

interface Props {
  questions: Question[];
}

export default function Board({ questions }: Props) {
  const [page, setPage] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const total = questions.length;

  const limit = useQuestionStore((state) => state.limit);

  const [selected, setSelected] = useState(false);

  const prevPage = (page: number) => {
    if (page > 0) {
      setPage((prev) => (page = prev - 1));
    }
  };

  const nextPage = (page: number) => {
    if (page <= total) {
      setPage((prev) => (page = prev + 1));
    }
  };

  const handleClick = () => {
    setSelected(true);
  };

  useEffect(() => {
    setSelected(false);
  }, [page]);

  return (
    <>
      <Card minW="lg">
        <Box borderWidth="1px" p={5} borderRadius="lg">
          <Flex justifyContent="space-between" alignItems="center">
            <Button
              onClick={() => prevPage(page - 1)}
              isDisabled={page - 1 === 0}
            >
              <BiLeftArrowAlt />
            </Button>
            <Text>
              {page} / {total}
            </Text>
            <Button
              onClick={() => nextPage(page + 1)}
              isDisabled={page === limit}
            >
              <BiRightArrowAlt />
            </Button>
          </Flex>
        </Box>

        <CardHeader>
          <Heading size="md">{questions[page - 1].question}</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <SyntaxHighlighter language="javascript" style={a11yDark}>
                {questions[page - 1].code}
              </SyntaxHighlighter>
            </Box>
            <Box padding={0.5}>
              <Flex justifyContent="space-between" alignItems="center" marginBottom={5}>
                <Heading size="xs" textTransform="uppercase">
                  OPTIONS:
                </Heading>
                {selected && (
                  <>
                    <BsQuestionCircleFill
                      size={20}
                      onClick={onOpen}
                      color="yellow"
                    />
                    <Button size='sm' variant='outline' colorScheme="yellow" onClick={() => nextPage(page + 1)}>Next</Button>
                  </>
                )}
              </Flex>

              {questions[page - 1].answers.map((opt, i) => (
                <Button
                  key={i}
                  width="100%"
                  borderRadius={2}
                  colorScheme="blue"
                  variant="outline"
                  onClick={handleClick}
                >
                  <Text noOfLines={1}>{opt}</Text>
                </Button>
              ))}
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
      <ExplainAnswer
        explain={questions[page - 1].explanation}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}
