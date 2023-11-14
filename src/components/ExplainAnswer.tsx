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
    explain: string; 
    isOpen: boolean;
    onClose: () => void; 
}


function ExplainAnswer({explain, isOpen, onClose}: Props) {  
  
    return (
      <>        
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Explanation</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight='bold' mb='1rem'>
              {explain}
              </Text>             
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>              
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ExplainAnswer;