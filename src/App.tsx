import { useDisclosure } from "@chakra-ui/react";
import Board from "./components/Board";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Start from "./components/Start";
import WelcomeModal from "./components/WelcomeModal";
import { useQuestionStore } from "./store/questions";
import { useEffect, useState } from "react";

function App() {
  const questions = useQuestionStore(state => state.questions);
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [firstTime, setFirstTime] = useState(false);

  useEffect(() => {
    onOpen()
  }, [])

  return (
    <Layout>
      <Header />
      {questions.length === 0 && <Start  />}
      {questions.length > 0 && <Board questions={questions} />}    
      <WelcomeModal isOpen={isOpen} onClose={onClose} /> 
    </Layout>
  );
}

export default App;
