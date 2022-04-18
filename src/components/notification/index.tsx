import { FC } from 'react';
import { AnimatePresence } from 'framer-motion';

import { StyledNotification } from './styles';

interface Props {
  notification: string;
}

const Notification: FC<Props> = ({ notification }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {notification && <StyledNotification>{notification}</StyledNotification>}
    </AnimatePresence>
  );
};

export default Notification;
