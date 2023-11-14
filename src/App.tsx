import Board from "./components/Board";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Start from "./components/Start";
import { useQuestionStore } from "./store/questions";

function App() {
  const questions = useQuestionStore(state => state.questions);

  return (
    <Layout>
      <Header />
      {questions.length === 0 && <Start  />}
      {questions.length > 0 && <Board questions={questions} />}     
    </Layout>
  );
}

export default App;
