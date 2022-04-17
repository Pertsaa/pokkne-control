import { FC } from 'react';

import { StyledModal } from './styles';

interface Props {
  isOpen: boolean;
  close: () => void;
}

const Modal: FC<Props> = ({ children, isOpen, close }) => {
  if (!isOpen) return null;

  return (
    <StyledModal onClick={close}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </StyledModal>
  );
};

export default Modal;
