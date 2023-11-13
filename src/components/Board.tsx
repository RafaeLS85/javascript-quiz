import { Box, Button, Code, Container, Flex, Text } from "@chakra-ui/react";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import { quiz } from "../data/quiz.json";
import { useState } from "react";

export default function Board() {
  const [page, setPage] = useState(1);
  const total = quiz.length;

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

  return (
    <Container>
      {/* <Flex justifyContent="space-between"> */}
      <Box border="1px solid" padding={5}>
        <Flex>
          <BiLeftArrowAlt
            size={25}
            onClick={() => prevPage(page - 1)}
            style={{ cursor: "pointer" }}
          />
          {page} / {total}
          <BiRightArrowAlt
            size={25}
            onClick={() => nextPage(page + 1)}
            style={{ cursor: "pointer" }}
          />
        </Flex>
      </Box>
      <Box border="1px solid" padding={5}>       
        {quiz[page - 1].question}
        {quiz[page - 1]?.optionalCode && <Code children={quiz[page - 1].optionalCode} />}
      </Box>
      <Box border="1px solid" padding={0.5}>
        
        {quiz[page - 1].options.map((opt, i) => (
            <Button key={i} style={{ width: "100%" }} colorScheme='orange' variant='outline'>{opt}</Button>
        ))}
       
      </Box>
      {/* </Flex> */}
    </Container>
  );
}
