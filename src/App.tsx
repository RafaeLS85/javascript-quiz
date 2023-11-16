import { useDisclosure } from "@chakra-ui/react";
import Board from "./components/Board";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Start from "./components/Start";
import WelcomeModal from "./components/Modals/WelcomeModal";
import { useQuestionStore } from "./store/questions";
import { useEffect } from "react";
import Footer from "./components/Footer";

function App() {
  const questions = useQuestionStore(state => state.questions);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const activeGame = useQuestionStore((state) => state.activeGame)

  useEffect(() => {   
    if(!activeGame){
      onOpen()
    } 
  }, [])

  return (
    <Layout>
      <Header />
      {questions.length === 0 && <Start  />}
      {questions.length > 0 && <Board questions={questions} />}    
      <WelcomeModal isOpen={isOpen} onClose={onClose} /> 
      {
        activeGame && <Footer /> 
      }      
    </Layout>
  );
}

export default App;
