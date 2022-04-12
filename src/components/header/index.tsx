import { FC } from 'react';
import { Button } from '../button';
import { NavList, NavItem, StyledHeader } from './styles';

const Header: FC = () => {
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
      <Button>Sign out</Button>
    </StyledHeader>
  );
};

export default Header;
