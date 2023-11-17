import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
  } from '@chakra-ui/react'
  import confetti from "canvas-confetti";
import { useQuestionStore } from '../../store/questions';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    score: {
      correct: number;
      incorrect: number;
      unanswer: number;
    };
}

function ScoreModal({isOpen, onClose, score}: Props) { 
  const reset = useQuestionStore((state) => state.reset);

  const MESSAGES = {
    title: [ 
      'You are amazing! 🤩🏆', 
      'Awesome! 😎', 
      'Great! 😊', 
      'Alright, keep learning! 😅', 
      'Pretty bad! 😭', 
      'Awful! 😔' 
    ]
  }

  const showMessage = (finalScore: number) => {
      if(finalScore === 0) return MESSAGES.title[5];
      if(finalScore === 10) {
        confetti();
        return MESSAGES.title[0];
      }
      if(finalScore === 7 ) return MESSAGES.title[2];
      if(finalScore > 0 && finalScore < 5) return MESSAGES.title[4];
      if(finalScore > 4 && finalScore < 7) return MESSAGES.title[3];
      if(finalScore > 7 && finalScore < 10) return MESSAGES.title[1];
  } 

  const onNewGame = () => {
    onClose();
    reset();
  }

    return (
      <>        
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize='4xl'> { showMessage(score.correct) } </ModalHeader>
            <ModalHeader> {`Score: ${score.correct}/10 (${score.correct * 10 }%)`} </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight='bold' mb='1rem'>
              Did you liked the Quiz? You have a suggestion? Need some help? Contact me on Twitter: @
              </Text>   
              <Text fontWeight='bold' mb='1rem'>
              Huge thanks to Oliver, who wrote most of the questions.
             </Text>
              <Text fontWeight='bold' mb='1rem'>
              Do you want to support this project? Share it with your friends:
              </Text>        
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onNewGame}>
                Start new Quiz
              </Button> 
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>               
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ScoreModal;