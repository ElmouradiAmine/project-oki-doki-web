import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody } from '@chakra-ui/react';
import Login from 'features/auth/components/Login/Login';
import Signup from 'features/auth/components/Signup/Signup';

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [currentMode, setCurrentMode] = useState('login');
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          {currentMode === 'login' ? (
            <Login onModeChange={() => setCurrentMode('signup')} />
          ) : (
            <Signup onModeChange={() => setCurrentMode('login')} />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AuthModal;
