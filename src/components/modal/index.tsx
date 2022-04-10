import { FC } from 'react';
import { ModalContent, StyledModal } from './styles';

interface Props {
  isOpen: boolean;
  close: () => void;
}

const Modal: FC<Props> = ({ children, isOpen, close }) => {
  if (!isOpen) return null;

  return (
    <StyledModal onClick={close}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </StyledModal>
  );
};

export default Modal;
