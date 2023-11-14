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
import { BsQuestionCircleFill } from 'react-icons/bs';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

function WelcomeModal({isOpen, onClose}: Props) {  
  
    return (
      <>        
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Welcome to JavaScript Quiz!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight='bold' mb='1rem'>
              After answering on a question, you can click on the <BsQuestionCircleFill size={20} color="yellow" /> icon to see the explanation.
              </Text>     

              <Text fontWeight='bold' mb='1rem'>
              Are you ready to start?
              </Text>        
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                I'm ready!
              </Button>              
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default WelcomeModal;