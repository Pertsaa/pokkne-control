import { FC } from 'react';

import { useSignOut } from '../../hooks/users/useSignOut';
import { NavList, NavItem, StyledHeader } from './styles';
import Button from '../button';

const Header: FC = () => {
  const { signOut } = useSignOut();

  return (
    <StyledHeader>
      <nav>
        <NavList>
          <NavItem>
            <Button to="/chatbots">Chatbots</Button>
          </NavItem>
          <NavItem>
            <Button to="/intents">Intents</Button>
          </NavItem>
        </NavList>
      </nav>
      <Button onClick={signOut}>Sign out</Button>
    </StyledHeader>
  );
};

export default Header;
