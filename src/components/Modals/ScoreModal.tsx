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

interface Props {
    isOpen: boolean;
    onClose: () => void;
    score: number;
}

function ScoreModal({isOpen, onClose, score}: Props) {  
  
    return (
      <>        
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader> Awesome! </ModalHeader>
            <ModalHeader> Score: 4/10 (40%) </ModalHeader>
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
              <Button colorScheme='blue' mr={3} onClick={onClose}>
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